package b209.docdoc.server.service;

import b209.docdoc.server.config.security.handler.DecodeEncodeHandler;
import b209.docdoc.server.dto.member.SignModReqDTO;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberAlreadyExistException;
import b209.docdoc.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final DecodeEncodeHandler decodeEncodeHandler;
    private final MemberRepository memberRepository;


    @Transactional
    public String sign(SignModReqDTO signModReqDTO) {

        String memberId = signModReqDTO.getMemberId();

        boolean exists = memberRepository.existsByMemberId(memberId);

        if (exists) {
            throw new MemberAlreadyExistException(ErrorCode.MEMBER_ALREADY_EXIST);
        }
        String password = decodeEncodeHandler.passwordEncode(signModReqDTO.getPassword());
        memberRepository.save(signModReqDTO.of(memberId, password));

        return memberId;
    }

}