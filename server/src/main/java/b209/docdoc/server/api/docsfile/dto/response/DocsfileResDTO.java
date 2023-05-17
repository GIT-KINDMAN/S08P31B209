package b209.docdoc.server.api.docsfile.dto.response;

import b209.docdoc.server.domain.entity.Docsfile;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class DocsfileResDTO {
    private Long idx;
    private String from;

    public static DocsfileResDTO of(Docsfile docsfile) {
        return DocsfileResDTO.builder()
                .idx(docsfile.getDocsfileIdx())
                .from(docsfile.getFromEmail())
                .build();
    }
}
