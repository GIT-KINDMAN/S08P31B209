package b209.docdoc.server.template.controller;

import b209.docdoc.server.config.security.auth.PrincipalDetails;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.service.TemplateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping(value = "/template")
@RequiredArgsConstructor
public class TemplateController {
	private static final String METHOD_NAME = TemplateController.class.getName();
	private final TemplateService templateService;

	@PostMapping("/save")
	public ResponseEntity<ResponseDTO> saveTemplate(@RequestBody DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO, @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {//@AuthenticationPrincipal PrincipalDetails principalDetails,
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.saveTemplate(documentTemplateSaveReqDTO, principalDetails.getUsername())));
	}

	@GetMapping("/all")
	public ResponseEntity<ResponseDTO> getAllTemplateName(@AuthenticationPrincipal PrincipalDetails principalDetails){//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getAllName(principalDetails.getUsername())));
	}
	@GetMapping("/{template_id}")
	public ResponseEntity<ResponseDTO> getTemplate(@PathVariable("template_id") long templateId){
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getTemplateByTemplateId(templateId)));
	}

	@GetMapping("/uuid/{template_uuid}")
	public void getMemberTemplate(@PathVariable String template_uuid){
		//  template_uuid인 템플릿의 편집 페이지로 이동
	}
}
