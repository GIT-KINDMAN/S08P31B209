package b209.docdoc.server.api.box.service.Impl;

import b209.docdoc.server.api.box.dto.Response.BoxReceivedResDTO;
import b209.docdoc.server.api.box.dto.Response.BoxSentResDTO;
import b209.docdoc.server.api.box.service.BoxService;
import b209.docdoc.server.api.box.dto.Response.MemberProgressInfo;
import b209.docdoc.server.api.box.dto.Response.MemberProgressRes;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import b209.docdoc.server.domain.entity.Receiver;
import b209.docdoc.server.domain.entity.Template;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.ReceiverNotFoundException;
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.domain.repository.BoxRepository;
import b209.docdoc.server.domain.repository.ReceiverRepository;
import b209.docdoc.server.domain.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.security.InvalidParameterException;
import java.util.*;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoxServiceImpl implements BoxService {

    private final BoxRepository boxRepository;
    private final ReceiverRepository receiverRepository;
    private final TemplateRepository templateRepository;

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
        Receiver receiver = receiverRepository.findById(receiverId)
                .orElseThrow(() -> new ReceiverNotFoundException(ErrorCode.RECEIVER_NOT_FOUND));
        receiver.updateDelete(true);
        receiverRepository.save(receiver);
        return null;
    }

//    @Override
//    @Transactional
//    public Page<BoxReceivedResDTO> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
//        String receiverEmail = SecurityManager.getCurrentMember().getEmail();
//
//        Sort sort = Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate")
//                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "receiverDeadline"))
//                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
//                .and(Sort.by(Sort.Direction.fromString(nameSort), "receiverDocsName"));
//
//        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);
//
//        Page<Receiver> receivers = boxRepository.findAllReceivedByReceiverEmail(receiverEmail, keywords, sortedPageable);
//
//        return receivers.map(receiver -> BoxReceivedResDTO.of(receiver));
//    }
//
//    @Override
//    @Transactional
//    public Page<BoxSentResDTO> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
//        String senderEmail = SecurityManager.getCurrentMember().getEmail();
//
//        Sort sort = Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate")
//                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "templateDeadline"))
//                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
//                .and(Sort.by(Sort.Direction.fromString(nameSort), "templateName"));
//
//        Pageable sortedPageable = PageRequest.of(pageable.getPageNumber() - 1, pageable.getPageSize(), sort);
//
//        Page<Template> templates = boxRepository.findAllSentByMemberEmail(senderEmail, keywords, sortedPageable);
//
//        return templates.map(template -> BoxSentResDTO.of(template, receiverRepository.findAllReceiverNameByTemplate(template)));
//    }

    @Override
    @Transactional
    public Page<BoxReceivedResDTO> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        String receiverEmail = SecurityManager.getCurrentMember().getEmail();

        Sort sort = Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate")
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "receiverDeadline"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(nameSort), "receiverDocsName"));

        List<BoxReceivedResDTO> resultList = new ArrayList<>();

        int pageNum = 0;
        Page<Receiver> page;
        do {
            Pageable sortedPageable = PageRequest.of(pageNum, pageable.getPageSize(), sort);
            page = boxRepository.findAllReceivedByReceiverEmail(receiverEmail, keywords, sortedPageable);
            resultList.addAll(page.map(receiver -> BoxReceivedResDTO.of(receiver)).getContent());
            pageNum++;
        } while (pageNum < page.getTotalPages());

        return new PageImpl<>(resultList, pageable, page.getTotalElements());
    }

    @Override
    @Transactional
    public Page<BoxSentResDTO> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable) {
        String senderEmail = SecurityManager.getCurrentMember().getEmail();

        Sort sort = Sort.by(Sort.Direction.fromString(createdDateSort), "createdDate")
                .and(Sort.by(Sort.Direction.fromString(deadlineSort), "templateDeadline"))
                .and(Sort.by(Sort.Direction.fromString(updatedDateSort), "updatedDate"))
                .and(Sort.by(Sort.Direction.fromString(nameSort), "templateName"));

        List<BoxSentResDTO> resultList = new ArrayList<>();

        int pageNum = 0;
        Page<Template> page;
        do {
            Pageable sortedPageable = PageRequest.of(pageNum, pageable.getPageSize(), sort);
            page = boxRepository.findAllSentByMemberEmail(senderEmail, keywords, sortedPageable);
            page.forEach(template -> resultList.add(BoxSentResDTO.of(template, receiverRepository.findAllReceiverNameByTemplate(template))));
            pageNum++;
        } while (pageNum < page.getTotalPages());

        return new PageImpl<>(resultList, pageable, page.getTotalElements());
    }

    @Override
    public MemberProgressRes getMemberProgress(Long templateIdx, MemberDTO member) {
        Optional<Template> template = templateRepository.findByTemplateIdx(templateIdx);
        if (template.isEmpty()) return null;

        List<Receiver> list =  receiverRepository.findAllByTemplateAndReceiverIsDeleted(template.get(), false);
        List<MemberProgressInfo> infos = new ArrayList<>();
        Integer notCompletedCount = 0;
        Integer completedCount = 0;
        for (Receiver receiver: list) {
            if (receiver.getReceiverIsCompleted()) completedCount++;
            else notCompletedCount++;
            infos.add(new MemberProgressInfo(receiver.getReceiverIsCompleted(), receiver.getReceiverEmail(), receiver.getReceiverName(), receiver.getReceiverPhone()));
        }

        return MemberProgressRes.of(notCompletedCount, completedCount, infos);
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