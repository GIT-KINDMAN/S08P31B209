package b209.docdoc.server.box.dto.Response;

import b209.docdoc.server.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberEmailResDTO {
    
    private String memberEmail;

    @Builder
    public MemberEmailResDTO(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public static MemberEmailResDTO of(Member member) {
        return new MemberEmailResDTO(member.getMemberEmail());
    }
}