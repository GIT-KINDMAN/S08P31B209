package b209.docdoc.server.template.dto.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TemplateNameResDTO  {
    private Long templateIdx;
    private String templateName;

    @Builder
    public TemplateNameResDTO (Long templateIdx, String templateName) {
        this.templateIdx = templateIdx;
        this.templateName = templateName;
    }

    public static TemplateNameResDTO  of(Long templateIdx, String templateName) {
        return TemplateNameResDTO .builder()
                .templateIdx(templateIdx)
                .templateName(templateName)
                .build();
    }
}
