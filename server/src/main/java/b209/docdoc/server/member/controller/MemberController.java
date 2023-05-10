package b209.docdoc.server.member.controller;


import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;
import b209.docdoc.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value = "/member")
@RequiredArgsConstructor
public class MemberController {
	private static final String METHOD_NAME = MemberController.class.getName();
	private final MemberService memberService;

	private String principalDetails = "ssafy@ssafy.com";
	@PutMapping
	public ResponseEntity<ResponseDTO> updateUser(@RequestBody UpdateUserReqDTO updateUserReqDTO) {//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, memberService.updateUser(updateUserReqDTO, principalDetails)));
	}
}
