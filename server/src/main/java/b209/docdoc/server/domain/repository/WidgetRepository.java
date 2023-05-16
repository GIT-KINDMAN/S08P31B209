package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface WidgetRepository extends MongoRepository<Widget, String> {
    Optional<Widget> findById(String idx);

    List<Widget> findByTemplateIdx(Long templateIdx);
}
