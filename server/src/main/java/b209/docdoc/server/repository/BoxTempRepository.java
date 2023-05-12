package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoxTempRepository extends JpaRepository<Receiver, Long> {
    List<Receiver> findAllByTemplate(Template template);
}
