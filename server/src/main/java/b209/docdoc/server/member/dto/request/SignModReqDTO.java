package b209.docdoc.server.member.dto.request;

import b209.docdoc.server.entity.Member;
import b209.docdoc.server.member.dto.mod;
import b209.docdoc.server.member.dto.modPw;
import b209.docdoc.server.member.dto.signUp;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SignModReqDTO {

	@NotBlank(message = "이메일이 없습니다.", groups = {mod.class, signUp.class})
	@Email
	private String email;

	@NotBlank(message = "비밀번호가 없습니다.", groups = signUp.class)
	private String password;

	@NotBlank(groups = modPw.class) //비밀번호 변경시 입니다.
	private String newPassword;
	@NotBlank(groups = modPw.class) //비밀번호 변경시 검증용입니다.
	private String originPassword;

	@NotBlank(message = "이름이 없습니다.", groups = {mod.class, signUp.class})
	private String name;

	@NotBlank(message = "전화번호가 없습니다.", groups = {mod.class, signUp.class})
	private String phone;

	@Builder
	public SignModReqDTO(String email, String password, String originPassword, String name, String phone) {
		this.email = email;
		this.password = password;
		this.originPassword = originPassword;
		this.name = name;
		this.phone = phone;
	}

	public Member of(String memberEmail, String password) {
		return Member.builder().memberEmail(email).memberPassword(password).memberName(name).memberPhone(phone).build();
	}

	public String make(Member member) {
		return this.getEmail();
	}
}
