package b209.docdoc.server.address.service.Impl;

import b209.docdoc.server.address.dto.AddressInfo;
import b209.docdoc.server.address.dto.Request.AddressEditorReq;
import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.dto.Response.AddressListRes;
import b209.docdoc.server.address.service.AddressService;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.repository.AddressBookRepository;
import b209.docdoc.server.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AddressServiceImpl implements AddressService {
    private MemberRepository memberRepository;
    private AddressBookRepository addressBookRepository;

    private final String NO_GROUP = "그룹없음";
    private final String NO_POSITION = "직책없음";
    private final String NO_PHONE = "번호없음";

    private HashSet<String> getMemberAddressEmailSet(String memberEmail) {
        Optional<Member> member = memberRepository.findByMemberEmail(memberEmail);
        if (member.isEmpty()) return null;

        List<AddressBook> list = addressBookRepository.findAllByMemberAndAddressIsDeleted(member.get(), false);
        HashSet<String> results = new HashSet<String>();
        for (AddressBook address: list) {
            results.add(address.getAddresEmail());
        }

        return results;
    }
    @Override
    public String saveOneAddress(AddressRegisterReq req, MemberDTO member) {
        if (member.getIsDeleted()) return null;

        Optional<Member> memberObj = memberRepository.findByMemberEmail(member.getEmail());
        if (memberObj.isEmpty()) return null;

        addressBookRepository.save(
                AddressBook.builder()
                        .member(memberObj.get())
                        .addressName(req.getName())
                        .addresEmail(req.getEmail())
                        .addressPhone((req.getPhone() == null || req.getPhone().trim().length() == 0) ? NO_PHONE : req.getPhone())
                        .addressGroup((req.getGroup() == null || req.getGroup().trim().length() == 0) ? NO_GROUP : req.getGroup())
                        .addressPosition(req.getPosition() == null || req.getPosition().trim().length() == 0 ? NO_POSITION : req.getPosition())
                        .addressIsDeleted(false)
                        .build()
        );

        return null;
    }

    @Override
    public AddressListRes getAddressListByGroup(String group, MemberDTO member) {
        List<AddressBook> list = new ArrayList<>();
        List<AddressInfo> result = new ArrayList<>();

        Optional<Member> memberObj = memberRepository.findByMemberEmail(member.getEmail());
        if (memberObj.isEmpty()) return null;

        if (group.equals("전체그룹")) list = addressBookRepository.findAllByMemberAndAddressIsDeleted(memberObj.get(), false);
        else list = addressBookRepository.findAllByMemberAndAddressGroupAndAddressIsDeleted(memberObj.get(), group, false);

        for (AddressBook address: list) {
            result.add(new AddressInfo(
                    address.getAddressIdx(),
                    address.getAddressName(),
                    address.getAddresEmail(),
                    address.getAddressPhone(),
                    address.getAddressGroup()));
        }

        return AddressListRes.of(addressBookRepository.findAllGroups(), result);
    }

    @Override
    public AddressListRes getAddressListByName(String name, MemberDTO member) {
        List<AddressBook> list = addressBookRepository.findAllByAddressNameStartingWithAndAddressIsDeleted(name, false);
        List<AddressInfo> result = new ArrayList<>();

        for (AddressBook address: list) {
            result.add(new AddressInfo(
                    address.getAddressIdx(),
                    address.getAddressName(),
                    address.getAddresEmail(),
                    address.getAddressPhone(),
                    address.getAddressGroup()
            ));
        }

        return AddressListRes.of(result);
    }

    @Override
    public String saveAddressEditor(AddressEditorReq req, MemberDTO member) {

        Optional<Member> memberObj = memberRepository.findByMemberEmail(member.getEmail());
        if (memberObj.isEmpty()) return null;

        HashSet<String> emails = getMemberAddressEmailSet(member.getEmail());

        for (AddressInfo address: req.getAddresses()) {
            if (emails != null && address.getEmail() != null && !emails.contains(address.getEmail())) {
                addressBookRepository.save(
                        AddressBook.builder()
                                .member(memberObj.get())
                                .addressName(address.getName())
                                .addresEmail(address.getEmail())
                                .addressPhone((address.getPhone() == null || address.getPhone().length() == 0) ? NO_PHONE : address.getPhone())
                                .addressGroup((address.getGroup() == null || address.getGroup().trim().length() == 0) ? NO_GROUP : address.getGroup())
                                .addressPosition(NO_POSITION)
                                .addressIsDeleted(false)
                                .build()
                );
            }
        }

        return null;
    }

    @Override
    public String removeAddress(String addressIdx, MemberDTO member) {
        Optional<Member> memberObj = memberRepository.findByMemberEmail(member.getEmail());
        if (memberObj.isEmpty()) return null;

        AddressBook addressBook = addressBookRepository.findAllByAddressIdx(Long.parseLong(addressIdx));
        if (addressBook == null) return null;

        addressBook.setAddressIsDeleted(true);
        addressBookRepository.save(addressBook);

        return null;
    }

    @Override
    public String removeAddressByGroup(String group, MemberDTO member) {
        Optional<Member> memberObj = memberRepository.findByMemberEmail(member.getEmail());
        if (memberObj.isEmpty()) return null;

        List<AddressBook> addressBooks = addressBookRepository.findAllByAddressGroupAndAddressIsDeleted(group, false);
        if (addressBooks == null || addressBooks.size() == 0) return null;

        for (AddressBook addressBook: addressBooks) {
            addressBook.setAddressIsDeleted(true);
            addressBookRepository.save(addressBook);
        }

        return null;
    }
}
