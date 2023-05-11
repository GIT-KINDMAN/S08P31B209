package b209.docdoc.server.box.service;

import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoxService {

	Page<Template> getTemplates(String userEmail, List<String> keywords, String nameSort, String createdDateSort, String updatedDateSort, Pageable pageable);

	Object deleteTemplates(Long templateId);

	Object deleteReceiverTemplates(Long receiverId);

}
