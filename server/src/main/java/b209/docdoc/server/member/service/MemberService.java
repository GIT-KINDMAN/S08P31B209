package b209.docdoc.server.member.service;

import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;

public interface MemberService {
	public Object updateUser(UpdateUserReqDTO userUpdatePostReq, String memberEmail);
}
