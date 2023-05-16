package b209.docdoc.server.api.file.dto;

import b209.docdoc.server.domain.entity.Docsfile;
import b209.docdoc.server.domain.entity.Imagefile;
import b209.docdoc.server.domain.entity.Templatefile;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class FileDTO {
    private String originalName;
    private String savedName;
    private String savedPath;
    private LocalDateTime uploadDate;

    public static FileDTO of(Imagefile file) {
        return FileDTO.builder()
                .originalName(file.getImagefileOriginalName())
                .savedName(file.getImagefileSavedName())
                .savedPath(file.getImagefileSavedPath())
                .build();
    }

    public static FileDTO of(Docsfile file) {
        return FileDTO.builder()
                .originalName(file.getDocsfileOriginalName())
                .savedName(file.getDocsfileSavedName())
                .savedPath(file.getDocsfileSavedPath())
                .build();
    }

    public static FileDTO of(Templatefile file) {
        return FileDTO.builder()
                .originalName(file.getTemplatefileOriginalName())
                .savedName(file.getTemplatefileSavedName())
                .savedPath(file.getTemplatefileSavedPath())
                .build();
    }
}
