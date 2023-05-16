package b209.docdoc.server.api.member.controller;


import b209.docdoc.server.api.member.dto.request.UpdateUserReqDTO;
import b209.docdoc.server.config.jwt.JwtTokenProvider;
import b209.docdoc.server.config.jwt.dto.CommonTokenDTO;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import b209.docdoc.server.api.member.dto.request.LoginReqDTO;
import b209.docdoc.server.api.member.dto.request.SignupReqDTO;
import b209.docdoc.server.api.member.service.MemberService;
import com.google.common.net.HttpHeaders;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping(value = "/member")
@RequiredArgsConstructor
public class MemberController {
    private static final String METHOD_NAME = MemberController.class.getName();
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/sign")
    public ResponseEntity<ResponseDTO> signup(@RequestBody SignupReqDTO signupReqDTO) {
        memberService.signupMember(signupReqDTO);
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_REGISTER));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginReqDTO loginReqDTO) {
        MemberDTO memberDTO = memberService.login(loginReqDTO);
        CommonTokenDTO commonTokenDTO = jwtTokenProvider.generateToken(memberDTO.getEmail());
        ResponseCookie cookie = jwtTokenProvider.generateResponseCookie(commonTokenDTO.getReIssuanceTokenDTO().getRefreshToken());
        jwtTokenProvider.saveRefresh(commonTokenDTO.getReIssuanceTokenDTO());
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_SIGN_IN, commonTokenDTO.getAccessToken()));
    }

    @GetMapping
    public ResponseEntity<ResponseDTO> getMyInfo() {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_PROFILE, SecurityManager.getCurrentMember()));
    }

    @GetMapping("/logout")
    public ResponseEntity<ResponseDTO> logout(@RequestHeader(value = "Authorization") String accessToken) {
        if (jwtTokenProvider.banAccessToken(accessToken) && jwtTokenProvider.deleteRefresh(SecurityManager.getCurrentMember().getEmail())) {
            return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_SIGN_OUT));
        }
        return ResponseEntity.internalServerError().body(ResponseDTO.of(HttpStatus.INTERNAL_SERVER_ERROR, Msg.FAIL_SIGN_OUT));
    }

    @PutMapping
    public ResponseEntity<ResponseDTO> updateUser(@RequestBody UpdateUserReqDTO updateUserReqDTO) {
        memberService.updateMember(updateUserReqDTO);
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_SIGN_IN));
    }


}
