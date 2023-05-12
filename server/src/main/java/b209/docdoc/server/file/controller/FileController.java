package b209.docdoc.server.file.controller;

import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.InvalidFileAccessException;
import b209.docdoc.server.file.dto.FileDTO;
import b209.docdoc.server.file.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;
import java.util.regex.Pattern;

@Controller
@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
@Log4j2
public class FileController {

    private final FileService fileService;

    @GetMapping("/{type}/{date}/{savedName}")
    public ResponseEntity<?> getFile(@PathVariable String type, @PathVariable String savedName, @PathVariable String date) throws MalformedURLException {
        Pattern pattern = Pattern.compile("\\.\\.");
        if (pattern.matcher(date).matches() || pattern.matcher(savedName).matches()) {
            throw new InvalidFileAccessException(ErrorCode.INVALID_FILE_ACCESS);
        }
        FileDTO fileDTO = null;
        switch (type) {
            case "image": fileDTO = fileService.getImageFile(savedName); break;
            case "docs": fileDTO = fileService.getDocsFile(savedName); break;
            case "template": fileDTO = fileService.getTemplateFile((savedName)); break;
        }
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }
}
