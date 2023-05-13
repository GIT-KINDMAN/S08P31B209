package b209.docdoc.server.box.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FileSaveReqDTO {
    private String originalName;
    private String savedName;
    private String savedPath;

    @Builder
    public FileSaveReqDTO(String originalName, String savedName, String savedPath) {
        this.originalName = originalName;
        this.savedName = savedName;
        this.savedPath = savedPath;
    }

    public static FileSaveReqDTO of(String originalName, String savedName, String savedPath) {
        return FileSaveReqDTO.builder()
                .originalName(originalName)
                .savedName(savedName)
                .savedPath(savedPath)
                .build();
    }
}