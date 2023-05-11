package b209.docdoc.server.template.controller;

import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.service.Impl.TemplateServiceImpl;
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
    private final TemplateServiceImpl templateServiceImpl;

    private String principalDetails = "ssafy@ssafy.com";

    @PostMapping("/save")
    public ResponseEntity<ResponseDTO> saveTemplate(@RequestBody DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO) throws Exception {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateServiceImpl.saveTemplate(documentTemplateSaveReqDTO, principalDetails)));
    }

    @GetMapping("/all")
    public ResponseEntity<ResponseDTO> getAllTemplateName() {//@AuthenticationPrincipal PrincipalDetails principalDetails
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateServiceImpl.getAllName(principalDetails)));
    }

    @GetMapping("/{templateId}")
    public ResponseEntity<ResponseDTO> getMyTemplate(
            @AuthenticationPrincipal String memberEmail,
            @PathVariable Long templateId) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateServiceImpl.getTemplateByMemberEmailAndTemplateIdx(memberEmail, templateId)));
    }

    @GetMapping("/uuid/{template_uuid}")
    public void getMemberTemplate(@PathVariable String template_uuid) {
        //  template_uuid인 템플릿의 편집 페이지로 이동
    }
}
