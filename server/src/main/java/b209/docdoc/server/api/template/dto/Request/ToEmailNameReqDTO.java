package b209.docdoc.server.api.template.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ToEmailNameReqDTO {
    List<String> toEmail;
    List<String> toName;

    @Builder
    public ToEmailNameReqDTO(List<String> toEmail, List<String> toName) {
        this.toEmail = toEmail;
        this.toName = toName;
    }

    public static ToEmailNameReqDTO of(List<String> toEmail, List<String> toName) {
        return ToEmailNameReqDTO.builder()
                .toEmail(toEmail)
                .toName(toName)
                .build();
    }

}
