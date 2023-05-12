package b209.docdoc.server.member.service;

import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.member.dto.request.LoginReqDTO;
import b209.docdoc.server.member.dto.request.SignupReqDTO;
import b209.docdoc.server.member.dto.request.UpdateUserReqDTO;

public interface MemberService {

	void signupMember(SignupReqDTO signupReqDTO);

	MemberDTO updateMember(UpdateUserReqDTO updateUserReqDTO);

	MemberDTO login(LoginReqDTO loginReqDTO);


}
