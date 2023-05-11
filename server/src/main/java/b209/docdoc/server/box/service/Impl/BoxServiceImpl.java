package b209.docdoc.server.box.service.Impl;

import b209.docdoc.server.box.service.BoxService;
import b209.docdoc.server.config.utils.SecurityManager;
import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.repository.BoxRepository;
import b209.docdoc.server.repository.DocsfileRepository;
import b209.docdoc.server.repository.ReceiverRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.InvalidParameterException;
import java.util.Arrays;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor

public class BoxServiceImpl implements BoxService {

    private final BoxRepository boxRepository;

    private final ReceiverRepository receiverRepository;

    private final DocsfileRepository docsfileRepository;

    @Value("${file.upload_dir2}") // application.properties에 설정된 파일 업로드 디렉터리 경로
    private String uploadDir;

    @Transactional
    @Override
    public Object deleteTemplates(Long templateId) {
        Template template = boxRepository.findById(templateId)
                .orElseThrow(() -> new TemplateNotFoundException(ErrorCode.TEMPLATE_NOT_FOUND));

        Optional.of(template)
                .filter(t -> t.getMember().getMemberIdx() == SecurityManager.getCurrentMember().getIdx())
                .orElseThrow(InvalidParameterException::new);
        template.updateDelete(true);
        boxRepository.save(template);
        return null;
    }

    @Override
    @Transactional
    public Object deleteReceiverTemplates(Long receiverId) {
        Receiver template = receiverRepository.findById(receiverId)
                .orElseThrow(() -> new TemplateNotFoundException(ErrorCode.TEMPLATE_NOT_FOUND));
        template.updateDelete(true);
        receiverRepository.save(template);
        return null;
    }

    @Transactional
    public Page<Receiver> getReceivedTemplates(String receiverEmail, String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "receiverDocsName")
                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "receiverDeadline"));

        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);

        return boxRepository.findAllReceivedByReceiverEmail(receiverEmail, keywords, sortedPageable);
    }

    @Transactional
    public Page<Template> getSentTemplates(String memberEmail, String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "templateName")
                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "templateDeadline"));

        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);

        return boxRepository.findAllSentByMemberEmail(memberEmail, keywords, sortedPageable);
    }

    @Transactional
//    public Long saveFile(MultipartFile file) {
    public Long saveFile(MultipartFile file, String receiverEmail) {
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String savedFileName = UUID.randomUUID().toString() + "_" + originalFileName;
        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);

        // 파일 확장자 확인 및 유효성 검사
        String[] allowedExtensions = new String[]{"pdf", "png", "jpg", "jpeg"};
        boolean isValidExtension = Arrays.stream(allowedExtensions).anyMatch(fileExtension::equalsIgnoreCase);
//        if (!isValidExtension) {
//            throw new InvalidFileExtensionException("Invalid file extension");
//        }

        // 파일 저장 경로를 구합니다.
        Path savePath = Paths.get(uploadDir).resolve(savedFileName);
        if (!Files.exists(savePath.getParent())) {
            try {
                Files.createDirectories(savePath.getParent());
            } catch (IOException e) {
                throw new RuntimeException("Could not create directory", e);
            }
        }

        // 파일 저장
        try {
            file.transferTo(savePath.toFile());
        } catch (IOException e) {
            throw new RuntimeException("Could not save file", e);
        }

        // 파일 정보 DB에 저장
        Receiver receiver = receiverRepository.findByReceiverEmail(receiverEmail)
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        Docsfile docsfile = Docsfile.builder()
                .docsfileOriginalName(originalFileName)
                .docsfileSavedName(savedFileName)
                .docsfileSavedPath(savePath.toString())
                .receiver(receiver)
                .build();

        docsfileRepository.save(docsfile);

        return docsfile.getDocsfileIdx();
    }

    @Transactional
    public Docsfile getFile(Long id) {
        return docsfileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid file Id:" + id));
    }
}