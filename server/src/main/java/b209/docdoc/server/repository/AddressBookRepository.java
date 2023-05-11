package b209.docdoc.server.repository;

import b209.docdoc.server.entity.AddressBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressBookRepository extends JpaRepository<AddressBook, Long> {
}
