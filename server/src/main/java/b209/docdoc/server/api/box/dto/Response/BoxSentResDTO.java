package b209.docdoc.server.api.box.dto.Response;

import b209.docdoc.server.domain.entity.Template;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class BoxSentResDTO {
    private Long templateIdx;
    private String templateUuid;
    private String templateName;
    private String templateDeadline;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    private MemberEmailResDTO member;
    private TemplatefileResDTO templatefile;
    private ArrayList<String> receivers;

    @Builder
    public BoxSentResDTO(Template template, TemplatefileResDTO templatefile, ArrayList<String> receivers) {
        this.templateIdx = template.getTemplateIdx();
        this.templateUuid = template.getTemplateUuid();
        this.templateName = template.getTemplateName();
        this.templateDeadline = template.getTemplateDeadline();
        this.createdDate = template.getCreatedDate();
        this.updatedDate = template.getUpdatedDate();

        this.member = MemberEmailResDTO.of(template.getMember());
        this.templatefile = TemplatefileResDTO.of(template.getTemplatefile());

        this.receivers = receivers;
    }

    public static BoxSentResDTO of(Template template, List<String> receiverNames) {
        ArrayList<String> receivers = new ArrayList<String>();
        for (int i = 0; i < 4; i++) {
            if (i >= receiverNames.size()) break;

            if (i == 3) receivers.add("...");
            else receivers.add(receiverNames.get(i));
        }
        return BoxSentResDTO.builder()
                .template(template)
                .templatefile(TemplatefileResDTO.of(template.getTemplatefile())) // assuming TemplatefileResDTO.of() exists
                .receivers(receivers)
                .build();
    }
}
