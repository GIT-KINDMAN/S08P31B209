package b209.docdoc.server.boxtemp.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Setter
public class MemberProgressRes {
    @JsonProperty("not_completed_count")
    Integer notCompletedCount;

    @JsonProperty("completed_count")
    Integer completedCount;

    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<MemberProgressInfo> members;

    public static MemberProgressRes of(Integer notCompletedCount, Integer completedCount, List<MemberProgressInfo> list) {
        MemberProgressRes res = new MemberProgressRes();
        res.setNotCompletedCount(notCompletedCount);
        res.setNotCompletedCount(completedCount);
        res.setMembers(list);

        return res;
    }
}
