package b209.docdoc.server.dto.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Builder
public class ProfileRes {

	private String memberId;
	private String name;
	private String email;
	private String tel;

	public ProfileRes(String memberId, String name, String email, String tel) {
		this.memberId = memberId;
		this.name = name;
		this.email = email;
		this.tel = tel;
	}

	public ProfileRes of(Member member) {
		return ProfileRes.builder()
				.memberId(member.getMemberId())
				.name(member.getName())
				.email(member.getEmail())
				.tel(member.getTel())
				.build();
	}

}
