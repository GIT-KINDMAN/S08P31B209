package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface WidgetRepository extends MongoRepository<Widget, String> {
    Optional<Widget> findById(String idx);

    List<Widget> findByTemplateIdx(Long templateIdx);
}
