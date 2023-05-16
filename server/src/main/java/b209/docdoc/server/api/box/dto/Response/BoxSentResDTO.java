package b209.docdoc.server.api.box.dto.Response;

import b209.docdoc.server.domain.entity.Template;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoxSentResDTO {
    private Long templateIdx;
    private String templateUuid;
    private String templateName;
    private String templateDeadline;

    private MemberEmailResDTO member;
    private TemplatefileResDTO templatefile;

    @Builder
    public BoxSentResDTO(Template template, TemplatefileResDTO templatefile) {
        this.templateIdx = template.getTemplateIdx();
        this.templateUuid = template.getTemplateUuid();
        this.templateName = template.getTemplateName();
        this.templateDeadline = template.getTemplateDeadline();

        this.member = MemberEmailResDTO.of(template.getMember());
        this.templatefile = TemplatefileResDTO.of(template.getTemplatefile());
    }

    public static BoxSentResDTO of(Template template) {
        return BoxSentResDTO.builder()
                .template(template)
                .templatefile(TemplatefileResDTO.of(template.getTemplatefile())) // assuming TemplatefileResDTO.of() exists
                .build();
    }
}
