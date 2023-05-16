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
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.domain.repository.BoxRepository;
import b209.docdoc.server.domain.repository.ReceiverRepository;
import b209.docdoc.server.domain.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    @Override
    public MemberProgressRes getMemberProgress(Long templateIdx, MemberDTO member) {
        Optional<Template> template = templateRepository.findByTemplateIdx(templateIdx);
        if (template.isEmpty()) return null;

        List<Receiver> list =  receiverRepository.findAllByTemplate(template.get());
        List<MemberProgressInfo> infos = new ArrayList<>();
        Integer notCompletedCount = 0;
        Integer completedCount = 0;
        for (Receiver receiver: list) {
            if (receiver.getReceiverIsCompleted()) completedCount++;
            else notCompletedCount++;
            infos.add(new MemberProgressInfo(receiver.getReceiverIsCompleted(), receiver.getReceiverEmail(), receiver.getReceiverName()));
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