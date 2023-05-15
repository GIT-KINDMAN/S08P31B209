package b209.docdoc.server.repository;

import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AddressBookRepository extends JpaRepository<AddressBook, Long> {
    List<AddressBook> findAllByMember(Member member);
    List<AddressBook> findAllByMemberAndAddressGroup(Member member, String group);
    List<AddressBook> findAllByAddressNameStartingWith(String name);
    @Query(value = "SELECT a.addressGroup FROM AddressBook a GROUP BY a.addressGroup order by a.addressGroup")
    List<String> findAllGroups();
}
