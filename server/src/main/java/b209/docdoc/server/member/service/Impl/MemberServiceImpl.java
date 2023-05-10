package b209.docdoc.server.member.service.Impl;

import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.security.handler.DecodeEncodeHandler;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberAlreadyExistException;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.exception.PasswordNotMatchException;
import b209.docdoc.server.member.dto.Request.LoginReqDTO;
import b209.docdoc.server.member.dto.Request.SignupReqDTO;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;
import b209.docdoc.server.member.service.MemberService;
import b209.docdoc.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

	private static final String METHOD_NAME = MemberService.class.getName();
	private final MemberRepository memberRepository;
	private final DecodeEncodeHandler decodeEncodeHandler;

	@Transactional
	@Override
	public Object updateUser(UpdateUserReqDTO userUpdatePostReq, String memberEmail) {
		Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
		member.update(userUpdatePostReq);
		memberRepository.save(member);
		return null;
	}

	@Transactional
	@Override
	public void signupUser(SignupReqDTO signupReqDTO) {
		if (memberRepository.existsByMemberEmail(signupReqDTO.getEmail())) throw new MemberAlreadyExistException(ErrorCode.MEMBER_ALREADY_EXIST);
		String password = decodeEncodeHandler.passwordEncode(signupReqDTO.getPassword());
		Member member = Member.builder()
				.memberEmail(signupReqDTO.getEmail())
				.memberPassword(password)
				.memberName(signupReqDTO.getName())
				.memberBirthday(signupReqDTO.getBirth())
				.memberGender(signupReqDTO.getGender())
				.memberPhone(signupReqDTO.getPhone())
				.memberAddress(signupReqDTO.getAddress())
				.memberGroup(signupReqDTO.getGroup())
				.memberPosition(signupReqDTO.getPosition())
				.build();
		memberRepository.save(member);
	}

	@Transactional(readOnly = true)
	@Override
	public MemberDTO login(LoginReqDTO loginReqDTO) {
		Member member = memberRepository.findByMemberEmail(loginReqDTO.getEmail()).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
		if (!decodeEncodeHandler.passwordValid(member.getMemberPassword(), loginReqDTO.getPassword())) throw new PasswordNotMatchException(ErrorCode.PW_NOT_MATCH);
		return MemberDTO.of(member);
	}
}
