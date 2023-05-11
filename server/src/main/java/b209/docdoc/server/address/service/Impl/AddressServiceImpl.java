package b209.docdoc.server.address.service.Impl;

import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.service.AddressService;
import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.repository.AddressBookRepository;
import b209.docdoc.server.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AddressServiceImpl implements AddressService {
    private MemberRepository memberRepository;
    private AddressBookRepository addressBookRepository;
    @Override
    public void addressSaveOne(AddressRegisterReq req, String memberEmail) {
        Optional<Member> member = memberRepository.findByMemberEmail(memberEmail);
        if (member.isEmpty()) return;

        addressBookRepository.save(
                AddressBook.builder()
                        .member(member.get())
                        .addressName(req.getName())
                        .addresEmail(req.getEmail())
                        .addressPhone(req.getPhone())
                        .addressGroup(req.getGroup())
                        .addressRegister(true)
                        .addressIsDeleted(false)
                        .build()
        );
    }
}
