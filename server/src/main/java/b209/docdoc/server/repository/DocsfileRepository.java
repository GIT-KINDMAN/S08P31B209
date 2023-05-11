package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Docsfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocsfileRepository extends JpaRepository<Docsfile, Long> {
}