package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Receiver;
import b209.docdoc.server.domain.entity.Template;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoxTempRepository extends JpaRepository<Receiver, Long> {
    List<Receiver> findAllByTemplate(Template template);
}
