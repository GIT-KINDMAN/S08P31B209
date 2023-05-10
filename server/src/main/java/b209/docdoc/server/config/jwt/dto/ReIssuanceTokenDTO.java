package b209.docdoc.server.config.jwt.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ReIssuanceTokenDTO {
	private String memberEmail;
	private String refreshToken;
}
