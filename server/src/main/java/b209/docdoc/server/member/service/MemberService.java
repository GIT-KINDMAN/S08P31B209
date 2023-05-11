package b209.docdoc.server.member.service;

import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.member.dto.Request.LoginReqDTO;
import b209.docdoc.server.member.dto.Request.SignupReqDTO;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;

public interface MemberService {
	Object updateUser(UpdateUserReqDTO userUpdatePostReq, String memberEmail);

	void signupUser(SignupReqDTO signupReqDTO);

	MemberDTO login(LoginReqDTO loginReqDTO);


}
