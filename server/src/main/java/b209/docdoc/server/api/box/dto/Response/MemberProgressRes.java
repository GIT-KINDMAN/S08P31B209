package b209.docdoc.server.api.box.dto.Response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

import java.util.List;

@Setter
public class MemberProgressRes {
    @JsonProperty("not_completed_count")
    Integer notCompletedCount;

    @JsonProperty(value = "completed_count", access = JsonProperty.Access.READ_WRITE)
    Integer completedCount;

    @JsonProperty(value = "members", access = JsonProperty.Access.READ_WRITE)
    List<MemberProgressInfo> members;

    public static MemberProgressRes of(Integer notCompletedCount, Integer completedCount, List<MemberProgressInfo> list) {
        MemberProgressRes res = new MemberProgressRes();
        res.setNotCompletedCount(notCompletedCount);
        res.setNotCompletedCount(completedCount);
        res.setMembers(list);

        return res;
    }
}