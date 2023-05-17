package b209.docdoc.server.api.docsfile.controller;

import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.api.docsfile.dto.request.DocsfileSaveReqDTO;
import b209.docdoc.server.api.docsfile.service.DocsfileService;
import b209.docdoc.server.api.file.dto.FileDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import b209.docdoc.server.config.utils.SecurityManager;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Slf4j
@RestController
@RequestMapping(value = "/docsfile")
@RequiredArgsConstructor
public class DocsfileController {

    private static final String METHOD_NAME = DocsfileController.class.getName();

    private final DocsfileService docsfileService;

    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDTO> uploadFile(@RequestParam("file") MultipartFile file, @RequestPart("docsfileSaveReqDTO") String docsfileSaveReqDTOJson) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        DocsfileSaveReqDTO docsfileSaveReqDTO = objectMapper.readValue(docsfileSaveReqDTOJson, DocsfileSaveReqDTO.class);
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_DOCS_SAVE, docsfileService.saveFile(file, docsfileSaveReqDTO)));
    }

    @GetMapping("/{savedName}")
    public ResponseEntity<?> getDocsFile(@PathVariable String savedName) throws IOException {
        MemberDTO member = SecurityManager.getCurrentMember();
        String email = member.getEmail();
        FileDTO fileDTO = docsfileService.getDocsfile(savedName, email);
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(Paths.get(fileDTO.getSavedPath())));

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(resource);
    }

}
