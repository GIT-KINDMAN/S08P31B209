package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoxRepository extends JpaRepository<Template, Long> {
    @Query("SELECT t FROM Template t WHERE t.templateName LIKE %:keyword% AND t.templateFromEmail = :userEmail")
    Page<Template> findAllSentWithKeyword(@Param("userEmail") String userEmail, @Param("keyword") String keyword, Pageable pageable);

    @Query("SELECT t FROM Template t WHERE t.templateName LIKE %:keyword% AND t.templateToEmail = :userEmail")
    Page<Template> findAllReceivedWithKeyword(@Param("userEmail") String userEmail, @Param("keyword") String keyword, Pageable pageable);
}