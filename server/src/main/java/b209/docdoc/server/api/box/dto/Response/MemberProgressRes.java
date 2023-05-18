package b209.docdoc.server.api.box.dto.Response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

import java.util.List;

@Setter
public class MemberProgressRes {
    @JsonProperty(value = "completed_count", access = JsonProperty.Access.READ_WRITE)
    Integer completedCount;

    @JsonProperty("not_completed_count")
    Integer notCompletedCount;

    @JsonProperty(value = "members", access = JsonProperty.Access.READ_WRITE)
    List<MemberProgressInfo> members;

    public static MemberProgressRes of(Integer completedCount, Integer notCompletedCount, List<MemberProgressInfo> list) {
        MemberProgressRes res = new MemberProgressRes();
        res.setCompletedCount(completedCount);
        res.setNotCompletedCount(notCompletedCount);
        res.setMembers(list);

        return res;
    }
}