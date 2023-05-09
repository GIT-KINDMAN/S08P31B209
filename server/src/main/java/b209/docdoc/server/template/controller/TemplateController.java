package b209.docdoc.server.template.controller;

import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
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
	public ResponseEntity<ResponseDTO> saveTemplate(){
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.saveTemplate()));
	}

	@GetMapping("/all")
	public ResponseEntity<ResponseDTO> getAllTemplateName(){//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getAllName("ssafy@ssafy.com")));
	}
	@GetMapping("/{template_id}")
	public ResponseEntity<ResponseDTO> getTemplate(@PathVariable String template_id){
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, 0));
	}
}
