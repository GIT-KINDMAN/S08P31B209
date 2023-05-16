package b209.docdoc.server.api.template.dto.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TemplatefileResDTO {

    private Long templatefileIdx;
    private String templatefileOriginalName;
    private String templatefileSavedName;
    private String templatefileSavedPath;

    @Builder
    public TemplatefileResDTO(Long templatefileIdx, String templatefileOriginalName, String templatefileSavedName, String templatefileSavedPath) {
        this.templatefileIdx = templatefileIdx;
        this.templatefileOriginalName = templatefileOriginalName;
        this.templatefileSavedName = templatefileSavedName;
        this.templatefileSavedPath = templatefileSavedPath;
    }

    public static TemplatefileResDTO of(Long templatefileIdx, String templatefileOriginalName, String templatefileSavedName, String templatefileSavedPath) {
        return TemplatefileResDTO.builder()
                .templatefileIdx(templatefileIdx)
                .templatefileOriginalName(templatefileOriginalName)
                .templatefileSavedName(templatefileSavedName)
                .templatefileSavedPath(templatefileSavedPath)
                .build();
    }
}
