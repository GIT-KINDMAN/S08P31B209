package b209.docdoc.server.repository;

import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressBookRepository extends JpaRepository<AddressBook, Long> {
    List<AddressBook> findAllByMember(Member member);
    List<AddressBook> findAllByMemberAndAddressGroup(Member member, String group);
    List<AddressBook> findAllByAddressNameStartingWith(String name);
}
