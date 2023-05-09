package b209.docdoc.server.template.service;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;

import java.util.List;

public interface TemplateService {

    List<String> getAllName(String memberEmail);

    public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail);


}
