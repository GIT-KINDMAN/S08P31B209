package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Receiver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReceiverRepository extends JpaRepository<Receiver, Long> {

    Optional<Receiver> findByReceiverEmail(String receiverEmail);
}
