package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Templatefile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TemplateFileRepository extends JpaRepository<Templatefile, Long> {
}
