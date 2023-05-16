package b209.docdoc.server.repository;

import b209.docdoc.server.entity.AddressBook;
import b209.docdoc.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AddressBookRepository extends JpaRepository<AddressBook, Long> {
    List<AddressBook> findAllByMemberAndAddressIsDeleted(Member member, Boolean isDeleted);
    List<AddressBook> findAllByMemberAndAddressGroupAndAddressIsDeleted(Member member, String group , Boolean isDeleted);
    List<AddressBook> findAllByAddressNameStartingWithAndAddressIsDeleted(String name , Boolean isDeleted);
    @Query(value = "SELECT a.addressGroup FROM AddressBook a WHERE a.addressIsDeleted=false GROUP BY a.addressGroup order by a.addressGroup")
    List<String> findAllGroups();
    AddressBook findByAddressIdx(Long addressIdx);
}
