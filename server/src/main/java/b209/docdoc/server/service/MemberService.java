package b209.docdoc.server.service;

import b209.docdoc.server.config.security.handler.DecodeEncodeHandler;
import b209.docdoc.server.controller.MemberController;
import b209.docdoc.server.dto.member.MemPageResDTO;
import b209.docdoc.server.dto.member.SignModReqDTO;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.exception.ErrorCode;
import b209.docdoc.server.exception.MemberNotFoundException;
import b209.docdoc.server.exception.MyPageHistoryException;
import b209.docdoc.server.exception.PasswordNotMatchException;
import b209.docdoc.server.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@RequestMapping(value = "/member")
@Transactional(readOnly = true)
public class MemberService {

    private static final String METHOD_NAME = MemberController.class.getName();

//    private final MemberRepositoryImpl memberRepositoryImpl;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final DecodeEncodeHandler decodeEncodeHandler;
    private final MemberRepository memberRepository;

    /**
     * 회원 정보 수정
     */
    @Transactional
    public String update(SignModReqDTO signModReqDTO, long idx) throws RuntimeException {

        Member member = memberRepository.findById(idx).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));

        String name = signModReqDTO.getName();
        String email = signModReqDTO.getEmail();
        String tel = signModReqDTO.getTel();

        member.update(signModReqDTO);
        memberRepository.updateMember(name, email, tel, idx);

        return member.getMemberId();
    }

    /**
     * 회원 비밀번호 수정
     */
    @Transactional
    public String updatePw(SignModReqDTO signModReqDTO, long idx) throws RuntimeException {

        Member member = memberRepository.findById(idx).orElseThrow(() -> new MemberNotFoundException(ErrorCode.MEMBER_NOT_FOUND));

        if (passwordEncoder.matches(signModReqDTO.getOriginPassword(), member.getPassword())) {
            log.info("기존 패스워드가 일치 합니다 기존 패스워드 : {} ", member.getPassword());
        } else {
            throw new PasswordNotMatchException(ErrorCode.PW_NOT_MATCH);
        }

        String newPassword = decodeEncodeHandler.passwordEncode(signModReqDTO.getNewPassword());
        member.update(newPassword);

        return member.getMemberId();
    }

    /**
     * 회원 프로필 조회
     */
//    @Transactional
//    public ProfileRes readProfile(long idx) {
//
//        List<Member> MyInfoList = memberRepositoryImpl.findMyProfile(idx);
//        return MyInfoList.stream().map(member -> ProfileRes.builder().build().of(member)).collect(Collectors.toList()).get(0);
//    }

//    @Transactional
//    public MemPageResDTO readMyPage(Long idx) {
//        log.info(METHOD_NAME + "- readMyPage");
//
//        Optional<Coin> optionalCoin = coinRepository.findById(idx);
//        if (!optionalCoin.isPresent()) {
//            throw new MyPageHistoryException(ErrorCode.MYPAGE_HISTORY_ERROR);
//        }
//
//        Integer myCoin = optionalCoin.get().getCoin();
//        List<MemPageDealDTO> reqList = dealRepository.findAllMyReqHistory(idx);
//        List<MemPageDealDTO> resList = dealRepository.findAllMyResHistory(idx);
//
//        return MemPageResDTO.builder()
//                .coin(myCoin)
//                .memPageDealDTOReqList(reqList != null ? reqList : Collections.emptyList())
//                .memPageDealDTOResList(resList != null ? resList : Collections.emptyList())
//                .build();
//    }
}