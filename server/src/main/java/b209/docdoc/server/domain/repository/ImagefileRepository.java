package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Imagefile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagefileRepository extends JpaRepository<Imagefile, Long> {
    Optional<Imagefile> findByImagefileSavedName(String savedName);
}
