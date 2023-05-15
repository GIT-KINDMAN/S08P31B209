package b209.docdoc.server.box.service;

import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoxService {

    Page<Receiver> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

    Page<Template> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

    Object deleteTemplates(Long templateId);

    Object deleteReceiverTemplates(Long receiverId);

}
