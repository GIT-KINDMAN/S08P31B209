package b209.docdoc.server.config.security.handler;

import b209.docdoc.server.entity.Member;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class DecodeEncodeHandler {
	private static final String METHOD_NAME = DecodeEncodeHandler.class.getName();
	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	private final MemberRepository memberRepository;

	@Autowired
	public DecodeEncodeHandler(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}

	public String passwordEncode(String password) {
		return passwordEncoder.encode(password);
	}

//	public String roleValid(String email) {
//		log.info(METHOD_NAME + "- roleValid() ...");
//		if (memberRepository.existsByMemberEmail(email)) {
//			log.info("Member memberId Validate - Success");
//			Member member = memberRepository.findByMemberEmail(email);
//			return member.getRole();
//		}
//		log.warn("Member memberId Validate - Fail");
//		return null;
//	}

	public boolean memberEmailValid(String memberEmail) {
		log.info(METHOD_NAME + "- emailValid() ...");
		try {
			Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
			if (member != null) {
				log.info("Member Validate - Success");
				if (member.getMemberEmail() != null) {
					log.info("Member memberId Validate - Success");
					return true;
				} else log.warn("Member memberId Validate - Fail");
			} else log.warn("Member Validate - Fail");
		} catch (Exception e) {
			log.error("SERVER ERROR " + METHOD_NAME, e);
		}
		return false;
	}

	public boolean passwordValid(String memberEmail, String password) {
		log.info(METHOD_NAME + "- passwordValid() ...");
		try {
			Member member = memberRepository.findByMemberEmail(memberEmail).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));
			if (passwordEncoder.matches(password, member.getMemberPassword())) {
				log.info("Password validate - Success");
				return true;
			} else log.warn("Password validate - Fail");
		} catch (Exception e) {
			log.error("SERVER ERROR " + METHOD_NAME, e);
		}
		return false;
	}
}
