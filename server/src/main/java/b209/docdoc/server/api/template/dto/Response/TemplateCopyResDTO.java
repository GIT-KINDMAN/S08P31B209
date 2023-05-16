package b209.docdoc.server.api.template.dto.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TemplateCopyResDTO {
    private String newTemplateUuid;

    @Builder
    public TemplateCopyResDTO(String newTemplateUuid) {
        this.newTemplateUuid = newTemplateUuid;
    }

    public static TemplateCopyResDTO of(String newTemplateUuid) {
        return TemplateCopyResDTO.builder()
                .newTemplateUuid(newTemplateUuid)
                .build();
    }
}
