package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Templatefile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemplateFileRepository extends JpaRepository<Templatefile, Long> {
	
}
