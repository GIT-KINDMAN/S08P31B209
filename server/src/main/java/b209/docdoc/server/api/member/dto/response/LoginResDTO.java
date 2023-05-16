package b209.docdoc.server.api.member.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Builder
public class LoginResDTO {
    private String message;
    private HttpStatus statusCode;
    private String accessToken;
}
