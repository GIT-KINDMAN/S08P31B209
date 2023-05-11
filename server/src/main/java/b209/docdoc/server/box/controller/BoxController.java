package b209.docdoc.server.box.controller;

import b209.docdoc.server.box.service.BoxService;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.entity.Docsfile;
import b209.docdoc.server.entity.Receiver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
@RestController
@RequestMapping(value = "/box")
@RequiredArgsConstructor
public class BoxController {

    private static final String METHOD_NAME = BoxController.class.getName();

    private final BoxService boxService;

    @GetMapping("/received-templates")
    public ResponseEntity<ResponseDTO> getReceivedTemplates(
            @RequestParam(value = "keywords", required = false) String keywords,
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @RequestParam(value = "deadlineSort", defaultValue = "asc") String deadlineSort,
            @AuthenticationPrincipal String receiverEmail,
            @PageableDefault(size = 10, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxService.getReceivedTemplates(receiverEmail, keywords, nameSort, createdDateSort, updatedDateSort, deadlineSort, pageable)));
    }

    @GetMapping("/sent-templates")
    public ResponseEntity<ResponseDTO> getSentTemplates(
            @RequestParam(value = "keywords", required = false) String keywords,
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @RequestParam(value = "deadlineSort", defaultValue = "asc") String deadlineSort,
            @AuthenticationPrincipal String memberEmail,
            @PageableDefault(size = 10, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxService.getSentTemplates(memberEmail, keywords, nameSort, createdDateSort, updatedDateSort, deadlineSort, pageable)));
    }

    @DeleteMapping("/sent/{template_id}")
    public ResponseEntity<ResponseDTO> deleteTemplates(@PathVariable("template_id") Long templateId) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TEMPLATE_SEARCH, boxService.deleteTemplates(templateId)));
    }

    @DeleteMapping("/received/{receiver_id}")
    public ResponseEntity<ResponseDTO> deleteReceiverTemplates(@PathVariable("receiver_id") Long receiverId) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TEMPLATE_SEARCH, boxService.deleteReceiverTemplates(receiverId)));
    }


    @PostMapping(value = "/docsfile/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDTO> uploadFile(@RequestParam("file") MultipartFile file) {
//        Long savedFileId = boxService.saveFile(file, receiverId);
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, "File saved successfully",  boxService.saveFile(file)));
    }

    @GetMapping("/docsfile/{docsfileIdx}")
    public ResponseEntity<byte[]> getFile(@PathVariable Long docsfileIdx, @AuthenticationPrincipal String userEmail) {
        Docsfile docsfile = boxService.getFile(docsfileIdx);
        Receiver receiver = docsfile.getReceiver();

        if (!userEmail.equals(receiver.getReceiverEmail()) && !userEmail.equals(receiver.getReceiverSenderEmail())) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        Path path = Paths.get(docsfile.getDocsfileSavedPath());
        byte[] data = null;

        try {
            data = Files.readAllBytes(path);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + docsfile.getDocsfileOriginalName());

        return new ResponseEntity<>(data, headers, HttpStatus.OK);
    }
}