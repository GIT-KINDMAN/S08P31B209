package b209.docdoc.server.member.service.Impl;

import b209.docdoc.server.entity.Member;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;
import b209.docdoc.server.member.service.MemberService;
import b209.docdoc.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

	private static final String METHOD_NAME = MemberService.class.getName();
	private final MemberRepository memberRepository;

	@Transactional
	@Override
	public Object updateUser(UpdateUserReqDTO userUpdatePostReq, String memberEmail) {
		Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
		member.update(userUpdatePostReq);
		memberRepository.save(member);
		return null;
	}
}
