package b209.docdoc.server.api.file.service;

import b209.docdoc.server.api.file.dto.FileDTO;

public interface FileService {
    FileDTO getTemplateFile(Long idx);
    FileDTO getDocsFile(Long idx);

    FileDTO getTemplateFileBySavedName(String savedName);
    FileDTO getDocsFileBySavedName(String savedName);
    FileDTO getImageFile(String savedName);
}
