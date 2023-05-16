package b209.docdoc.server.api.docsfile.service;

import b209.docdoc.server.api.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.domain.entity.Docsfile;
import b209.docdoc.server.api.file.dto.FileDTO;
import org.springframework.web.multipart.MultipartFile;

public interface DocsfileService {
    Docsfile saveFile(MultipartFile file, DocsfileSaveReqDTO docsfileSaveReqDTO);
    FileDTO getDocsfile(String uuid, String email);
}
