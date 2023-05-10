package b209.docdoc.server.template.service;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
<<<<<<< HEAD
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
=======
import b209.docdoc.server.template.dto.Response.TemplateResDTO;
>>>>>>> 80507c7015dbc8966053e15a2b6abf01c043cf54

import java.util.List;

public interface TemplateService {

    List<TemplateNameResDTO> getAllName(String memberEmail);

    public Object saveTemplate(DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) throws Exception;

    public TemplateResDTO getTemplateByTemplateId(Long templateId);

}
