package b209.docdoc.server.template.service;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Response.TemplateResDTO;

import java.util.List;

public interface TemplateService {

    List<String> getAllName(String memberEmail);

    public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) throws Exception;

    public TemplateResDTO getTemplateByTemplateId(Long templateId);

}
