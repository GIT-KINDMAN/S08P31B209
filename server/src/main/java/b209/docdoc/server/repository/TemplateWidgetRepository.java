package b209.docdoc.server.repository;

import b209.docdoc.server.entity.TemplateWidget;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TemplateWidgetRepository extends MongoRepository<TemplateWidget, String> {
	Optional<TemplateWidget> findById(String id);
}
