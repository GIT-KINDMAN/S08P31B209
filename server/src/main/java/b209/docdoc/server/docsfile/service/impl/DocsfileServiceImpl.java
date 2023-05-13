package b209.docdoc.server.docsfile.service.impl;

import b209.docdoc.server.config.utils.FileHandler;
import b209.docdoc.server.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.docsfile.service.DocsfileService;
import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.file.dto.FileDTO;
import b209.docdoc.server.repository.DocsfileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DocsfileServiceImpl implements DocsfileService {

    private final FileHandler fileHandler;
    private final DocsfileRepository docsfileRepository;

    @Transactional
    public Docsfile saveFile(MultipartFile file, DocsfileSaveReqDTO docsfileSaveReqDTO) {
        FileDTO fileDTO = fileHandler.savedFile(file, new String[] {"doc", "docx", "pdf"});

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

//    public Docsfile getFileByUuidAndEmail(String uuid, String email) {
//        return docsfileRepository.findByUuidAndToEmailOrFromEmail(uuid, email, email)
//                .orElseThrow(() -> new IllegalArgumentException("No file found with this UUID and email: " + uuid + ", " + email));
//    }

    @Transactional
    public FileDTO getDocsfile(String uuid, String email) {
        return docsfileRepository.findByUuidAndToEmailOrFromEmail(uuid, email, email)
                .map(FileDTO::of)
                .orElseThrow(() -> new IllegalArgumentException("Invalid uuid or email"));
    }
}
