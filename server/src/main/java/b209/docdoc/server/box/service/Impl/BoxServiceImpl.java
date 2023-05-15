package b209.docdoc.server.box.service.Impl;

import b209.docdoc.server.box.dto.Response.BoxReceivedResDTO;
import b209.docdoc.server.box.dto.Response.BoxSentResDTO;
import b209.docdoc.server.box.dto.Response.BoxTemplateResDTO;
import b209.docdoc.server.box.service.BoxService;
import b209.docdoc.server.config.utils.FileHandler;
import b209.docdoc.server.config.utils.SecurityManager;
import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.InvalidFileExtensionException;
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.file.dto.FileDTO;
import b209.docdoc.server.repository.BoxRepository;
import b209.docdoc.server.repository.DocsfileRepository;
import b209.docdoc.server.repository.ReceiverRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
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

    @Override
    @Transactional
    public Page<BoxReceivedResDTO> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        String receiverEmail = SecurityManager.getCurrentMember().getEmail();

        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "receiverDocsName")
                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "receiverDeadline"));

        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);

        Page<Receiver> receivers = boxRepository.findAllReceivedByReceiverEmail(receiverEmail, keywords, sortedPageable);

        return receivers.map(receiver -> BoxReceivedResDTO.of(receiver));
    }

    @Override
    @Transactional
    public Page<BoxSentResDTO> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        String senderEmail = SecurityManager.getCurrentMember().getEmail();

        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "templateName")
                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "templateDeadline"));

        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);

        Page<Template> templates = boxRepository.findAllSentByMemberEmail(senderEmail, keywords, sortedPageable);

        return templates.map(template -> BoxSentResDTO.of(template));
    }

//    @Transactional
//    public Page<BoxReceivedResDTO> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
//        String receiverEmail = SecurityManager.getCurrentMember().getEmail();
//
//        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "receiverDocsName")
//                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
//                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
//                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "receiverDeadline"));
//
//        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);
//
//        Page<Receiver> receivers = boxRepository.findAllReceivedByReceiverEmail(receiverEmail, keywords, sortedPageable);
//
//        return receivers.map(receiver -> BoxSentResDTO.of(receiver.getReceiverDocsName(), receiver.getReceiverDeadline(), receiver.getReceiverSenderName(), receiver.getReceiverSenderEmail(), receiver.getReceiverEmail(), receiver.getReceiverName(), BoxTemplateResDTO.of(receiver.getTemplate())));
//    }
//
//    @Override
//    @Transactional
//    public Page<BoxSentResDTO> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
//        String senderEmail = SecurityManager.getCurrentMember().getEmail();
//
//        Sort sort = Sort.by(Sort.Direction.fromString(nameSort), "templateName")
//                .and(Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate"))
//                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
//                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "templateDeadline"));
//
//        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);
//
//        Page<BoxSentResDTO> templates = boxRepository.findAllSentByMemberEmail(senderEmail, keywords, sortedPageable);
//
//        return templates.map(template -> BoxSentResDTO.of(template, template.getTemplatefile()));
//    }

}