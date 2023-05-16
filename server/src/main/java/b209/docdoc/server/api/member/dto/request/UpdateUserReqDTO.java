package b209.docdoc.server.api.member.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateUserReqDTO {
	String	phone;
	String	address;
	String	group;
	String	position;

	@Builder
	public UpdateUserReqDTO(String phone, String address, String group, String position) {
		this.phone = phone;
		this.address = address;
		this.group = group;
		this.position = position;
	}
	public static  UpdateUserReqDTO of(String phone, String address, String group, String position) {
		return UpdateUserReqDTO.builder()
				.phone(phone)
				.address(address)
				.group(group)
				.position(position)
				.build();
	}
}
