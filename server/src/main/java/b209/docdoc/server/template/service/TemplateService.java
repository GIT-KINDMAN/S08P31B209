package b209.docdoc.server.template.service;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Response.TemplateNameResDTO;
import b209.docdoc.server.template.dto.Response.TemplateResDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TemplateService {

    List<TemplateNameResDTO> getAllName(String memberEmail);

    public Object saveTemplate(MultipartFile pdfFile, DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) throws Exception;

    public TemplateResDTO getTemplateByTemplateId(Long templateId);

}
