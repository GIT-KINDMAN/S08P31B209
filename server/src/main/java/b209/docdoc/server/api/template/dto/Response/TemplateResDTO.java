package b209.docdoc.server.api.template.dto.Response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class TemplateResDTO {
    private Long templateId;
    private List<WidgetResDTO> widgets;
    private TemplatefileResDTO templatefile;

    @Builder
    public TemplateResDTO(long templateId, List<WidgetResDTO> widgets, TemplatefileResDTO templatefile) {
        this.templateId = templateId;
        this.widgets = widgets;
        this.templatefile = templatefile;
    }

    public static TemplateResDTO of(long templateId, List<WidgetResDTO> widgets, TemplatefileResDTO templatefile) {
        return TemplateResDTO.builder()
                .templateId(templateId)
                .widgets(widgets)
                .templatefile(templatefile)
                .build();
    }
}