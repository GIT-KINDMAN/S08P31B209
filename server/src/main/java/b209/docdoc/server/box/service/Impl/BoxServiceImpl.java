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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.InvalidParameterException;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor

public class BoxServiceImpl implements BoxService {

    private final BoxRepository boxRepository;

    private final ReceiverRepository receiverRepository;

    private final DocsfileRepository docsfileRepository;

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
    public Long saveFile(MultipartFile file) {
        String originalName = file.getOriginalFilename();
        String savedName = System.currentTimeMillis() + "_" + originalName;
        String savedPath = "/your/directory/" + savedName;

        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(savedPath);
            Files.write(path, bytes);
        } catch (IOException e) {
            e.printStackTrace();
        }

        Docsfile docsfile = Docsfile.builder()
                .docsfileOriginalName(originalName)
                .docsfileSavedName(savedName)
                .docsfileSavedPath(savedPath)
                .build();

        return docsfileRepository.save(docsfile).getDocsfileIdx();
    }

    @Transactional
    public Docsfile getFile(Long id) {
        return docsfileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid file Id:" + id));
    }
}