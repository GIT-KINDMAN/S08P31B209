package b209.docdoc.server.template.dto.Response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class TemplateResDTO {
    private long templateId;
    private List<WidgetResDTO> widgets;

    @Builder
    public TemplateResDTO(long templateId, List<WidgetResDTO> widgets) {
        this.templateId = templateId;
        this.widgets = widgets;
    }

    public static TemplateResDTO of(long templateId, List<WidgetResDTO> widgets){
        return TemplateResDTO.builder()
                .templateId(templateId)
                .widgets(widgets)
                .build();
    }
}