package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Docsfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DocsfileRepository extends JpaRepository<Docsfile, Long> {
    Optional<Docsfile> findByDocsfileSavedName(String savedName);
}
