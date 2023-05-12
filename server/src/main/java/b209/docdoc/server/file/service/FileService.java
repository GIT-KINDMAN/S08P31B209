package b209.docdoc.server.file.service;

import b209.docdoc.server.file.dto.FileDTO;

public interface FileService {
    FileDTO getTemplateFile(Long idx);
    FileDTO getDocsFile(String savedName);
    FileDTO getImageFile(String savedName);
}
