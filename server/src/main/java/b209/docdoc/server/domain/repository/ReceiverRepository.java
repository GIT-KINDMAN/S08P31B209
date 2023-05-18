package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Receiver;
import b209.docdoc.server.domain.entity.Template;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReceiverRepository extends JpaRepository<Receiver, Long> {

    List<Receiver> findAllByTemplateAndReceiverIsDeleted(Template template, Boolean isDeleted);

    @Query("SELECT r.receiverName FROM Receiver r WHERE r.template =:template AND r.receiverIsDeleted=false ")
    List<String> findAllReceiverNameByTemplate(Object template);

}
