package b209.docdoc.server.docsfile.service;

import b209.docdoc.server.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.file.dto.FileDTO;
import org.springframework.web.multipart.MultipartFile;

public interface DocsfileService {
    Docsfile saveFile(MultipartFile file, DocsfileSaveReqDTO docsfileSaveReqDTO);
    FileDTO getDocsfile(String uuid, String email);
}
