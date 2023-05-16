package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Receiver;
import b209.docdoc.server.domain.entity.Template;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReceiverRepository extends JpaRepository<Receiver, Long> {

    Optional<Receiver> findByReceiverEmail(String receiverEmail);
    List<Receiver> findAllByTemplate(Template template);
}
