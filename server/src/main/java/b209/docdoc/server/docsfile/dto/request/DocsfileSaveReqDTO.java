package b209.docdoc.server.docsfile.dto.request;

import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.dto.Response.WidgetResDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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
