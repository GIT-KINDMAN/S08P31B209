package b209.docdoc.server.member.controller;

import b209.docdoc.server.config.jwt.JwtTokenProvider;
import b209.docdoc.server.config.jwt.dto.CommonTokenDTO;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import com.google.common.net.HttpHeaders;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://k8b209.p.ssafy.io", "http://localhost:5173"})
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/reissue")
    public ResponseEntity<ResponseDTO> reissue() {
        MemberDTO memberDTO = SecurityManager.getCurrentMember();
        CommonTokenDTO commonTokenDTO = jwtTokenProvider.generateToken(memberDTO.getEmail());
        ResponseCookie cookie = jwtTokenProvider.generateResponseCookie(commonTokenDTO.getReIssuanceTokenDTO().getRefreshToken());
        jwtTokenProvider.saveRefresh(commonTokenDTO.getReIssuanceTokenDTO());
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TOKEN_REISSUE, commonTokenDTO.getAccessToken()));

    }

}
