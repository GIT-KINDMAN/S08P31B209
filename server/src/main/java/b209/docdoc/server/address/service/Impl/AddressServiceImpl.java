package b209.docdoc.server.address.service.Impl;

import b209.docdoc.server.address.dto.AddressInfo;
import b209.docdoc.server.address.dto.AddressInfoBool;
import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.dto.Response.AddressBoolListRes;
import b209.docdoc.server.address.dto.Response.AddressListRes;
import b209.docdoc.server.address.service.AddressService;
import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import b209.docdoc.server.repository.AddressBookRepository;
import b209.docdoc.server.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AddressServiceImpl implements AddressService {
    private MemberRepository memberRepository;
    private AddressBookRepository addressBookRepository;
    @Override
    public void saveOneaddress(AddressRegisterReq req, String memberEmail) {
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

    @Override
    public AddressListRes getAddressList(String group, String memberEmail) {
        List<AddressBook> list = new ArrayList<>();
        List<AddressInfo> result = new ArrayList<>();

        if (group == null || group.length() == 0) list = addressBookRepository.findAll();
        else list = addressBookRepository.findAllByAddressGroup(group);

        for (AddressBook address: list) {
            result.add(new AddressInfo(address.getAddressName(), address.getAddresEmail(), address.getAddressPhone(), address.getAddressGroup()));
        }

        return AddressListRes.of(result);
    }

    @Override
    public AddressBoolListRes getAddressBoolList(String name, String memberEmail) {
        List<AddressBook> list = addressBookRepository.findAllByAddressNameStartingWith(name);
        List<AddressInfoBool> result = new ArrayList<>();

        for (AddressBook address: list) {
            result.add(new AddressInfoBool(
                    address.getAddressName(),
                    address.getAddresEmail(),
                    address.getAddressPhone(),
                    address.getAddressGroup(),
                    address.getAddresEmail().equals(memberEmail)
            ));
        }

        return AddressBoolListRes.of(result);
    }
}
