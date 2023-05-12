package b209.docdoc.server.boxtemp.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MemberProgressInfo {
    @JsonProperty("is_completed")
    Boolean isCompleted;
    String email;
    String name;
}
