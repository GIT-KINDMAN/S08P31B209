package b209.docdoc.server.api.member.service;

import b209.docdoc.server.api.member.dto.request.UpdateUserReqDTO;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.api.member.dto.request.LoginReqDTO;
import b209.docdoc.server.api.member.dto.request.SignupReqDTO;

public interface MemberService {

	void signupMember(SignupReqDTO signupReqDTO);

	MemberDTO updateMember(UpdateUserReqDTO updateUserReqDTO);

	MemberDTO login(LoginReqDTO loginReqDTO);


}
