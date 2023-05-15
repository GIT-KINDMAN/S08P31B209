package b209.docdoc.server.box.dto.Response;


import b209.docdoc.server.entity.Templatefile;
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

    public static TemplatefileResDTO of(Templatefile templatefile) {
        return TemplatefileResDTO.builder()
                .templatefileIdx(templatefile.getTemplatefileIdx())
                .templatefileOriginalName(templatefile.getTemplatefileOriginalName())
                .templatefileSavedName(templatefile.getTemplatefileSavedName())
                .templatefileSavedPath(templatefile.getTemplatefileSavedPath())
                .build();
    }
}
