package b209.docdoc.server.api.docsfile.service.impl;

import b209.docdoc.server.api.docsfile.dto.response.DocsfileResDTO;
import b209.docdoc.server.api.docsfile.service.DocsfileService;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.FileHandler;
import b209.docdoc.server.api.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import b209.docdoc.server.domain.entity.Docsfile;
import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.domain.entity.Template;
import b209.docdoc.server.domain.entity.Templatefile;
import b209.docdoc.server.domain.repository.DocsfileRepository;
import b209.docdoc.server.domain.repository.TemplateRepository;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.TemplateAuthorNotMatchedException;
import b209.docdoc.server.exception.TemplateNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DocsfileServiceImpl implements DocsfileService {

    private final FileHandler fileHandler;
    private final DocsfileRepository docsfileRepository;
    private final TemplateRepository templateRepository;

    @Transactional
    public Docsfile saveFile(MultipartFile file, DocsfileSaveReqDTO docsfileSaveReqDTO) {
        FileDTO fileDTO = fileHandler.savedFile(file, new String[] {"jpg", "png", "pdf", "jpeg"});

        String uuid = docsfileSaveReqDTO.getUuid(); // 템플릿 uuid
        String toEmail = docsfileSaveReqDTO.getToEmail(); // 수신자 이메일
        String fromEmail = docsfileSaveReqDTO.getFromEmail(); // 발신자 이메일

        Docsfile docsfile = Docsfile.builder()
                .docsfileOriginalName(fileDTO.getOriginalName())
                .docsfileSavedName(fileDTO.getSavedName())
                .docsfileSavedPath(fileDTO.getSavedPath())
                .uuid(uuid)
                .toEmail(toEmail)
                .fromEmail(fromEmail)
                .build();
        return docsfileRepository.save(docsfile);
    }

    @Transactional(readOnly = true)
    @Override
    public List<DocsfileResDTO> getDocsFileByTemplateIdx(Long idx) {
        MemberDTO memberDTO = SecurityManager.getCurrentMember();
        Template template = templateRepository.findByTemplateIdx(idx).orElseThrow(() -> new TemplateNotFoundException(ErrorCode.TEMPLATE_NOT_FOUND));
        // 템플릿 작성자(메일보낸사람)이 아니면 회신문서들에 접근하면 안됨
        if (!template.getMember().getMemberEmail().equals(memberDTO.getEmail())) {
            throw new TemplateAuthorNotMatchedException(ErrorCode.TEMPLATE_AUTHOR_NOT_MATCHED);
        }
        Templatefile templatefile = template.getTemplatefile();
        List<Docsfile> docsfileList = docsfileRepository.findAllByUuid(templatefile.getTemplatefileSavedName());
        return docsfileList.stream().map(DocsfileResDTO::of).collect(Collectors.toList());
    }

    @Transactional
    public FileDTO getDocsfile(String uuid, String email) {
        return docsfileRepository.findByUuidAndToEmailOrFromEmail(uuid, email, email)
                .map(FileDTO::of)
                .orElseThrow(() -> new IllegalArgumentException("Invalid uuid or email"));
    }
}
