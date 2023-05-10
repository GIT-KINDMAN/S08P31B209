package b209.docdoc.server.member.controller;


import b209.docdoc.server.config.jwt.JwtTokenProvider;
import b209.docdoc.server.config.jwt.dto.CommonTokenDTO;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.member.dto.Request.LoginReqDTO;
import b209.docdoc.server.member.dto.Request.SignupReqDTO;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;
import b209.docdoc.server.member.service.MemberService;
import com.google.common.net.HttpHeaders;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;

@Slf4j
@RestController
@RequestMapping(value = "/member")
@RequiredArgsConstructor
public class MemberController {
	private static final String METHOD_NAME = MemberController.class.getName();
	private final MemberService memberService;
	private final JwtTokenProvider jwtTokenProvider;

	private String principalDetails = "ssafy@ssafy.com";

	@PutMapping
	public ResponseEntity<ResponseDTO> updateUser(@RequestBody UpdateUserReqDTO updateUserReqDTO) {//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, memberService.updateUser(updateUserReqDTO, principalDetails)));
	}

	@PostMapping("/sign")
	public ResponseEntity<ResponseDTO> signup(@RequestBody SignupReqDTO signupReqDTO) {
		memberService.signupUser(signupReqDTO);
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_REGISTER));
	}

	@PostMapping("/login")
	public ResponseEntity<ResponseDTO> login(@RequestBody LoginReqDTO loginReqDTO) {
		MemberDTO memberDTO = memberService.login(loginReqDTO);
		CommonTokenDTO commonTokenDTO = jwtTokenProvider.generateToken(memberDTO.getEmail());
		ResponseCookie cookie = jwtTokenProvider.generateResponseCookie(commonTokenDTO.getReIssuanceTokenDTO().getRefreshToken());
		return ResponseEntity.ok()
				.header(HttpHeaders.SET_COOKIE, cookie.toString())
				.body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_SIGN_IN, commonTokenDTO.getAccessToken()));
	}


}
