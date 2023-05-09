package b209.docdoc.server.template.service.Impl;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;

import java.util.List;

public interface TemplateServiceImpl {

    List<String> getAllName(String memberEmail);

    public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail);


}
