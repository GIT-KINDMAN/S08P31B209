package b209.docdoc.server.api.docsfile.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DocsfileSaveReqDTO {
    String uuid;
    String toEmail;
    String fromEmail;

    @Builder
    public DocsfileSaveReqDTO(String uuid, String toEmail, String fromEmail) {
        this.uuid = uuid;
        this.toEmail = toEmail;
        this.fromEmail = fromEmail;
    }

    public static DocsfileSaveReqDTO of(String uuid, String toEmail, String fromEmail) {
        return DocsfileSaveReqDTO.builder()
                .uuid(uuid)
                .toEmail(toEmail)
                .fromEmail(fromEmail)
                .build();
    }
}
