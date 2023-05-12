package b209.docdoc.server.file.service;

import b209.docdoc.server.file.dto.FileDTO;

public interface FileService {
    FileDTO getTemplateFile(String savedName);
    FileDTO getDocsFile(String savedName);
    FileDTO getImageFile(String savedName);
}
