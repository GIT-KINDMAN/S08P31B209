package b209.docdoc.server.api.docsfile.service;

import b209.docdoc.server.api.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.api.docsfile.dto.response.DocsfileResDTO;
import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.domain.entity.Docsfile;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface DocsfileService {
    Docsfile saveFile(MultipartFile file, DocsfileSaveReqDTO docsfileSaveReqDTO);
    List<DocsfileResDTO> getDocsFileByTemplateIdx(Long idx);
    FileDTO getDocsfile(String uuid, String email);
}
