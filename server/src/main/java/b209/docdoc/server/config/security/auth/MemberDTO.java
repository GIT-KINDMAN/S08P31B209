package b209.docdoc.server.config.security.auth;

import b209.docdoc.server.config.utils.BooleanToYNConverter;
import b209.docdoc.server.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Convert;

@Setter
@Getter
@NoArgsConstructor
public class MemberDTO {
    private Long idx;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String gender;
    private String address;
    private String position;
    private String birthday;
    @Convert(converter = BooleanToYNConverter.class)
    private Boolean isDeleted;

    @Builder
    public MemberDTO(Long idx, String password, String name, String email, String phone, String gender, String address, String position, String birthday, Boolean isDeleted) {
        this.idx = idx;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
        this.position = position;
        this.birthday = birthday;
        this.isDeleted = isDeleted;
    }

    public static MemberDTO of(Member member) {
        return MemberDTO.builder()
                .idx(member.getMemberIdx())
                .password(member.getMemberPassword())
                .name(member.getMemberName())
                .email(member.getMemberEmail())
                .phone(member.getMemberPhone())
                .gender(member.getMemberGender())
                .address(member.getMemberAddress())
                .position(member.getMemberPosition())
                .birthday(member.getMemberBirthday())
                .isDeleted(member.getMemberIsDeleted())
                .build();
    }
}
