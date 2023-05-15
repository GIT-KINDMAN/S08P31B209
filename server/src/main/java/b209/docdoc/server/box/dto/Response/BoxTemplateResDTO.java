package b209.docdoc.server.box.dto.Response;

import b209.docdoc.server.entity.Template;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoxTemplateResDTO {
    private String templateUuid;
    private String templateName;
    private String templateDeadline;
    private MemberEmailResDTO member;
    private TemplatefileResDTO templatefile;

    @Builder
    public BoxTemplateResDTO(String templateUuid, String templateName, String templateDeadline, MemberEmailResDTO member, TemplatefileResDTO templatefile) {
        this.templateUuid = templateUuid;
        this.templateName = templateName;
        this.templateDeadline = templateDeadline;
        this.member = member;
        this.templatefile = templatefile;
    }

    public static BoxTemplateResDTO of(Template template) {
        MemberEmailResDTO member = MemberEmailResDTO.of(template.getMember());
        TemplatefileResDTO templatefile = TemplatefileResDTO.of(template.getTemplatefile());

        return BoxTemplateResDTO.builder()
                .templateUuid(template.getTemplateUuid())
                .templateName(template.getTemplateName())
                .templateDeadline(template.getTemplateDeadline())
                .member(member)
                .templatefile(templatefile)
                .build();
    }
}
