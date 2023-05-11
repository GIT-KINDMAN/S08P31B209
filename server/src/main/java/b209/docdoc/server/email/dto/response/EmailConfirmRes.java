package b209.docdoc.server.email.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

@Setter
public class EmailConfirmRes {
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    String code;

    public static EmailConfirmRes of(String code) {
       EmailConfirmRes res = new EmailConfirmRes();
       res.setCode(code);

       return res;
    }
}
