package b209.docdoc.server.config.jwt.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommonTokenDTO {
	private String accessToken;
	private ReIssuanceTokenDTO reIssuanceTokenDTO;
}
