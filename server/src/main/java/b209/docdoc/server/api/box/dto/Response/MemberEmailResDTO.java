package b209.docdoc.server.api.box.dto.Response;

import b209.docdoc.server.domain.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberEmailResDTO {

    private String memberEmail;
    private String memberName;

    @Builder
    public MemberEmailResDTO(String memberEmail, String memberName) {
        this.memberEmail = memberEmail;
        this.memberName = memberName;
    }

    public static MemberEmailResDTO of(Member member) {
        return MemberEmailResDTO.builder()
                .memberEmail(member.getMemberEmail())
                .memberName(member.getMemberName())
                .build();
    }
}