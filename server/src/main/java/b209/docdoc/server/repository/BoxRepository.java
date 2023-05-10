package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoxRepository extends JpaRepository<Template, Long> {
    @Query("SELECT t FROM Template t JOIN t.member m WHERE t.templateName LIKE %:keyword% AND m.memberEmail = :userEmail")
    Page<Template> findAllByKeyword(@Param("userEmail") String userEmail, @Param("keyword") String keyword, Pageable pageable);
}