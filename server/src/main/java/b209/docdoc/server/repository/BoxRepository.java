package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoxRepository extends JpaRepository<Template, Long> {
    @Query("SELECT r FROM Receiver r WHERE r.receiverEmail LIKE %:receiverEmail%")
    Page<Receiver> findAllReceivedByReceiverEmail(@Param("receiverEmail") String receiverEmail, Pageable pageable);

    @Query("SELECT t FROM Template t WHERE t.member.memberEmail LIKE %:memberEmail%")
    Page<Template> findAllSentByMemberEmail(@Param("memberEmail") String memberEmail, Pageable pageable);
}