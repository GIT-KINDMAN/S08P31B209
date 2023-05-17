package b209.docdoc.server.api.member.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
@NoArgsConstructor
public class UpdateUserPasswordReqDTO {
    @NotBlank
    private String originalPassword;
    @NotBlank
    private String newPassword;
}
