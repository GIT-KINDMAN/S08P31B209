package b209.docdoc.server.api.file.service.impl;

import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.api.file.service.FileService;
import b209.docdoc.server.domain.entity.Docsfile;
import b209.docdoc.server.domain.entity.Imagefile;
import b209.docdoc.server.domain.entity.Template;
import b209.docdoc.server.domain.entity.Templatefile;
import b209.docdoc.server.domain.repository.TemplateFileRepository;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.SaveFileNotFoundException;
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.domain.repository.DocsfileRepository;
import b209.docdoc.server.domain.repository.ImagefileRepository;
import b209.docdoc.server.domain.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Log4j2
public class FileServiceImpl implements FileService {

    private final DocsfileRepository docsfileRepository;
    private final ImagefileRepository imagefileRepository;
    private final TemplateRepository templateRepository;
    private final TemplateFileRepository templateFileRepository;

    @Transactional(readOnly = true)
    @Override
    public FileDTO getTemplateFile(Long idx) {
        Template template = templateRepository.findByTemplateIdx(idx).orElseThrow(() -> new TemplateNotFoundException(ErrorCode.TEMPLATE_NOT_FOUND));
        return FileDTO.of(template.getTemplatefile());
    }

    @Transactional(readOnly = true)
    @Override
    public FileDTO getDocsFile(String savedName) {
        Docsfile docsfile = docsfileRepository.findByDocsfileSavedName(savedName).orElseThrow(() -> new SaveFileNotFoundException(ErrorCode.FILE_NOT_FOUND));
        return FileDTO.of(docsfile);
    }

    @Transactional(readOnly = true)
    @Override
    public FileDTO getImageFile(String savedName) {
        Imagefile imagefile = imagefileRepository.findByImagefileSavedName((savedName)).orElseThrow(() -> new SaveFileNotFoundException(ErrorCode.FILE_NOT_FOUND));
        return FileDTO.of(imagefile);
    }

    @Transactional(readOnly = true)
    @Override
    public FileDTO getTemplateFileBySavedName(String savedName) {
        Templatefile templatefile = templateFileRepository.findByTemplatefileSavedName(savedName).orElseThrow(() -> new SaveFileNotFoundException(ErrorCode.FILE_NOT_FOUND));
        return FileDTO.of(templatefile);
    }

}
