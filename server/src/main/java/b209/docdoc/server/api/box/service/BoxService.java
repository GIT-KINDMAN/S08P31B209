package b209.docdoc.server.api.box.service;

import b209.docdoc.server.api.box.dto.Response.BoxReceivedResDTO;
import b209.docdoc.server.api.box.dto.Response.BoxSentResDTO;
import b209.docdoc.server.api.box.dto.Response.MemberProgressRes;
import b209.docdoc.server.config.security.auth.MemberDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoxService {

    Page<BoxReceivedResDTO> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);
//    Page<Receiver> getReceivedTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

    Page<BoxSentResDTO> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);
//    Page<Template> getSentTemplates(String keywords, String nameSort, String createdDateSort, String updatedDateSort, String deadlineSort, Pageable pageable);

    Object deleteTemplates(Long templateId);

    Object deleteReceiverTemplates(Long receiverId);

    MemberProgressRes getMemberProgress(Long templateIdx, MemberDTO member);

}
