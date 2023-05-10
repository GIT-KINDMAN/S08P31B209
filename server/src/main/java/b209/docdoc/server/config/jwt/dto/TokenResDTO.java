package b209.docdoc.server.config.jwt.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TokenResDTO {
	private int code;
	private String token;
}
