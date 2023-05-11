package b209.docdoc.server.boxtemp.service.Impl;

import b209.docdoc.server.boxtemp.dto.response.MemberProgressInfo;
import b209.docdoc.server.boxtemp.dto.response.MemberProgressRes;
import b209.docdoc.server.boxtemp.service.BoxTempService;
import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import b209.docdoc.server.repository.BoxTempRepository;
import b209.docdoc.server.repository.TemplateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BoxTempServiceImpl implements BoxTempService {
    private BoxTempRepository boxTempRepository;
    private TemplateRepository templateRepository;
    @Override
    public MemberProgressRes getMemberProgress(Long templateIdx, MemberDTO member) {
        Optional<Template> template = templateRepository.findByTemplateIdx(templateIdx);
        if (template.isEmpty()) return null;

        List<Receiver> list =  boxTempRepository.findAllByTemplate(template.get());
        List<MemberProgressInfo> infos = new ArrayList<>();
        Integer notCompletedCount = 0;
        Integer completedCount = 0;
        for (Receiver receiver: list) {
            if (receiver.getReceiverIsCompleted()) completedCount++;
            else notCompletedCount++;
            infos.add(new MemberProgressInfo(receiver.getReceiverIsCompleted(), receiver.getReceiverEmail(), receiver.getReceiverName()));
        }

        return MemberProgressRes.of(notCompletedCount, completedCount, infos);
    }
}
