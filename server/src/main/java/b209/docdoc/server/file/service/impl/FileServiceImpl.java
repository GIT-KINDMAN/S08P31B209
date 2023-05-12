package b209.docdoc.server.file.service.impl;

import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.entity.Imagefile;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.entity.Templatefile;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.SaveFileNotFoundException;
import b209.docdoc.server.exception.TemplateNotFoundException;
import b209.docdoc.server.file.dto.FileDTO;
import b209.docdoc.server.file.service.FileService;
import b209.docdoc.server.repository.DocsfileRepository;
import b209.docdoc.server.repository.ImagefileRepository;
import b209.docdoc.server.repository.TemplateFileRepository;
import b209.docdoc.server.repository.TemplateRepository;
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
}
