package b209.docdoc.server.box.service;

import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BoxService {

    Page<Receiver> getReceivedTemplates(String receiverEmail, String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

    Page<Template> getSentTemplates(String memberEmail, String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

	Object deleteTemplates(Long templateId);

	Object deleteReceiverTemplates(Long receiverId);

    Long saveFile(MultipartFile file);

    Docsfile getFile(Long id);

}
