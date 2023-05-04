package b209.docdoc.server.dto.token;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ReIssuanceTokenDTO {
	private String memberId;
	private String refreshToken;
}
