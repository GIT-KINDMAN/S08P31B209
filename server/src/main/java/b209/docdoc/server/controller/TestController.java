package b209.docdoc.server.controller;

import b209.docdoc.server.config.security.auth.PrincipalDetails;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.dto.member.SignModReqDTO;
import b209.docdoc.server.dto.member.mod;
import b209.docdoc.server.dto.member.modPw;
import b209.docdoc.server.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping(value = "/test")
@RequiredArgsConstructor
public class TestController {

    private static final String METHOD_NAME = TestController.class.getName();

    @GetMapping("/")
    public ResponseEntity<ResponseDTO> myPage(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TEST_API, "YeahA"));
    }
}
