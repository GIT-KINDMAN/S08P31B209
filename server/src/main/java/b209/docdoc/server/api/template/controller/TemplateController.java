package b209.docdoc.server.api.template.controller;

import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.api.file.service.FileService;
import b209.docdoc.server.api.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.config.security.auth.PrincipalDetails;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.api.template.dto.Request.TemplateCopyReqDTO;
import b209.docdoc.server.api.template.service.TemplateService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;

@Slf4j
@RestController
@RequestMapping(value = "/template")
@RequiredArgsConstructor
public class TemplateController {

	private static final String METHOD_NAME = TemplateController.class.getName();
	private final TemplateService templateService;
	private final FileService fileService;

	@PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<ResponseDTO> saveTemplate(@RequestPart MultipartFile file, @RequestPart("documentTemplateSaveReqDTO") String documentTemplateSaveReqDTOJson, @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO = objectMapper.readValue(documentTemplateSaveReqDTOJson, DocumentTemplateSaveReqDTO.class);
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.saveTemplate(file, documentTemplateSaveReqDTO, principalDetails.getUsername())));
	}

	@GetMapping("/all")
	public ResponseEntity<ResponseDTO> getAllTemplateName(@AuthenticationPrincipal PrincipalDetails principalDetails) {//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getAllName(principalDetails.getUsername())));
	}

    @GetMapping("/{templateId}")
    public ResponseEntity<ResponseDTO> getMyTemplate(
            @PathVariable Long templateId) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_SEARCH_TEMPLATE, templateService.getTemplateByMemberEmailAndTemplateIdx(templateId)));
    }

	@GetMapping("uuid/{savedName}")
	public ResponseEntity<?> getTemplatefileBySavedName(@PathVariable String savedName) throws MalformedURLException {
		FileDTO fileDTO = fileService.getTemplateFileBySavedName(savedName);
		return ResponseEntity.ok()
				.contentType(MediaType.APPLICATION_OCTET_STREAM)
				.body(new UrlResource("file:" + fileDTO.getSavedPath()));
	}

//	public ResponseEntity<?> getTemplateFileByUuid(@PathVariable String uuid) throws MalformedURLException {
//		FileDTO fileDTO = templateService.getTemplateFileByUuid(uuid);
//		return ResponseEntity.ok()
//				.contentType(MediaType.APPLICATION_OCTET_STREAM)
//				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
//				.body(new UrlResource("file:" + fileDTO.getSavedPath()));
//	}

//    @GetMapping("/uuid/{template_uuid}")
//    public void getMemberTemplate(@PathVariable String template_uuid) {
//        //  template_uuid인 템플릿의 편집 페이지로 이동
//    }

	@PostMapping("/copy")
	public ResponseEntity<ResponseDTO> copyTemplate(@RequestBody TemplateCopyReqDTO templateCopyReqDTO) {
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TEMPLATE_COPY, templateService.copyTemplate(templateCopyReqDTO)));
	}
}
