package b209.docdoc.server.api.template.service;

import b209.docdoc.server.api.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.api.template.dto.Request.TemplateCopyReqDTO;
import b209.docdoc.server.api.template.dto.Response.TemplateCopyResDTO;
import b209.docdoc.server.api.template.dto.Response.TemplateNameResDTO;
import b209.docdoc.server.api.template.dto.Response.TemplateResDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TemplateService {

    List<TemplateNameResDTO> getAllName(String memberEmail);

    public Object saveTemplate(MultipartFile pdfFile, DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, String memberEmail) throws Exception;

    public TemplateResDTO getTemplateByMemberEmailAndTemplateIdx(Long templateIdx);

    TemplateCopyResDTO copyTemplate(TemplateCopyReqDTO templateCopyReqDTO);
}
