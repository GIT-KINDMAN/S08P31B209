package b209.docdoc.server.config.jwt;

import b209.docdoc.server.config.jwt.dto.CommonTokenDTO;
import b209.docdoc.server.config.jwt.dto.ReIssuanceTokenDTO;
import b209.docdoc.server.config.jwt.dto.TokenResDTO;
import b209.docdoc.server.config.redis.RedisRepository;
import b209.docdoc.server.config.utils.SecurityManager;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;

/**
 * generateToken() : 사번 값을 입력하여 accessToken, refreshToken 을 CommonTokenSet 으로 리턴
 * generateAccessToken() : 사번 값을 입력하여 accessToken 을 String 으로 리턴
 * getUserPk() : accessToken 값을 입력하여 Token 안에 있는 유저의 사번을 String 으로 리턴
 * validateToken() : accessToken 검증 함수
 * requestCheckToken() : Token 이 accessToken 인지 refreshToken 인지 확인 후 TokenReqDTO 로 리턴 ... 0 : accessToken / 1 : refreshToken / 2 : 에러
 * saveRefresh() :
 * validateExistingToken() : refreshToken 검증 함수
 * updateRefresh() : refreshToken 을 새로 받아 DB에 업데이트
 */

@Slf4j
@Component
public class JwtTokenProvider {
    private static final String METHOD_NAME = JwtTokenProvider.class.getName();
    private final RedisRepository redisRepository;
    private final String headerKeyAccess;
    private final String headerKeyRefresh;
    private final String typeAccess;
    private final String typeRefresh;
    private final String secretKey;
    private final long accessValidTime;
    private final long refreshValidTime;

    @Autowired
    public JwtTokenProvider(RedisRepository redisRepository, @Value(value = "${jwt.header.access}") String headerKeyAccess,
                            @Value(value = "${jwt.header.refresh}") String headerKeyRefresh,
                            @Value(value = "${jwt.type.access}") String typeAccess,
                            @Value(value = "${jwt.type.refresh}") String typeRefresh,
                            @Value(value = "${jwt.secret.key}") String secretValue,
                            @Value(value = "${jwt.time.access}") String accessValidString,
                            @Value(value = "${jwt.time.refresh}") String refreshValidString) {
        this.redisRepository = redisRepository;
        this.headerKeyAccess = headerKeyAccess;
        this.headerKeyRefresh = headerKeyRefresh;
        this.typeAccess = typeAccess;
        this.typeRefresh = typeRefresh;
        this.secretKey = Base64.getEncoder().encodeToString(secretValue.getBytes());
        this.accessValidTime = Long.parseLong(accessValidString) * 1000;
        this.refreshValidTime = Long.parseLong(refreshValidString) * 1000;
    }

    public CommonTokenDTO generateToken(String userPk) {
        log.info(METHOD_NAME + "- generateToken() ...");
        Date now = new Date();

        String accessToken = generateAccessToken(userPk);
        String refreshToken = Jwts.builder()
                .setSubject(userPk)
                .setExpiration(new Date(now.getTime() + refreshValidTime))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        return CommonTokenDTO.builder().accessToken(accessToken)
                .reIssuanceTokenDTO(ReIssuanceTokenDTO.builder()
                        .memberEmail(userPk)
                        .refreshToken(refreshToken)
                        .build()).build();
    }

    public String generateAccessToken(String userPk) {
        log.info(METHOD_NAME + "- generateAccessToken() ...");
        Date now = new Date();

        return Jwts.builder()
                .setSubject(userPk)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + accessValidTime))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public String getUserPk(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        log.info(METHOD_NAME + "- validateToken() ...");
        if (redisRepository.getValue(token) != null) {
            log.error("로그아웃한 토큰 " + METHOD_NAME);
            return false;
        }
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (SignatureException se) {
            log.error("잘못된 서명 " + METHOD_NAME, se);
        } catch (MalformedJwtException me) {
            log.error("잘못된 토큰 " + METHOD_NAME, me);
        } catch (ExpiredJwtException ee) {
            log.error("만료된 토큰 " + METHOD_NAME, ee);
        } catch (UnsupportedJwtException ue) {
            log.error("지원되지 않는 토큰 " + METHOD_NAME, ue);
        } catch (IllegalArgumentException ie) {
            log.error("비어있는 토큰 " + METHOD_NAME, ie);
        } catch (NullPointerException ne) {
            log.error("존재하지 않는 토큰 " + METHOD_NAME, ne);
        }
        return false;
    }

    public TokenResDTO requestCheckToken(HttpServletRequest request) {
        log.info(METHOD_NAME + "- requestCheckToken() ...");
        try {
            String token = request.getHeader(headerKeyAccess);
            if (request.getServletPath().equals("/auth/reissue")) {
                Cookie rtk = WebUtils.getCookie(request, "rtk");
                return TokenResDTO.builder()
                        .code(1)
                        .token(rtk.getValue().replace(typeAccess, ""))
                        .build();
            }

            if (token.startsWith(typeAccess)) {
                return TokenResDTO.builder()
                        .code(0)
                        .token(token.replace(typeAccess, ""))
                        .build();
            }
            if (token.startsWith(typeRefresh)) {
                return TokenResDTO.builder()
                        .code(1)
                        .token(token.replace(typeRefresh, "")).build();
            }
        } catch (NullPointerException ne) {
            log.error("요청 값이 비어 있습니다. " + METHOD_NAME);
        } catch (Exception e) {
            log.error("SERVER ERROR " + METHOD_NAME, e);
        }
        return TokenResDTO.builder().code(2).token("").build();
    }

    public boolean saveRefresh(ReIssuanceTokenDTO reIssuanceTokenDTO) {
        log.info(METHOD_NAME + "- saveRefresh() ...");
        try {
            redisRepository.setValue(reIssuanceTokenDTO.getMemberEmail(), reIssuanceTokenDTO.getRefreshToken(), Duration.ofMillis(refreshValidTime));
            if (redisRepository.getValue(reIssuanceTokenDTO.getMemberEmail()) != null) return true;
        } catch (NullPointerException ne) {
            log.error("토큰 셋이 비어있습니다. " + METHOD_NAME, ne);
        } catch (Exception e) {
            log.error("토큰 셋 저장 실패 " + METHOD_NAME, e);
        }
        return false;
    }

    public boolean validateRefreshToken(String token) {
        log.info(METHOD_NAME + "- validateExistingToken() ...");
        try {
            if (this.validateToken(token)) {
                String userPk = this.getUserPk(token);
                String existingToken = redisRepository.getValue(userPk);
                if (existingToken.equals(token)) return true;
            }
        } catch (Exception e) {
            log.error("토큰 저장소 비교 검증 에러 " + METHOD_NAME, e);
        }
        return false;
    }

    public boolean updateRefresh(ReIssuanceTokenDTO reIssuanceTokenDTO) {
        log.info(METHOD_NAME + "- updateRefresh() ...");
        try {
            redisRepository.deleteValue(reIssuanceTokenDTO.getMemberEmail());
            redisRepository.setValue(reIssuanceTokenDTO.getMemberEmail(), reIssuanceTokenDTO.getRefreshToken(), Duration.ofMillis(refreshValidTime));
            return true;
        } catch (NullPointerException ne) {
            log.error("토큰 저장소가 비어있습니다. " + METHOD_NAME, ne);
        } catch (Exception e) {
            log.error("SERVER ERROR " + METHOD_NAME, e);
        }
        return false;
    }

    public Cookie generateCookie(String value) {
        log.info(METHOD_NAME + "- generateCookie() ...");
        Cookie cookie = new Cookie(headerKeyRefresh, typeRefresh + value);
        cookie.setMaxAge((int) refreshValidTime);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        return cookie;
    }

    public ResponseCookie generateResponseCookie(String refreshToken) {
        log.info(METHOD_NAME + "- generateResponseCookie() ...");
        return ResponseCookie.from("rtk", refreshToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(accessValidTime)
                .build();
    }

    public Long getMemberIdx(String token) {
        Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
        String member_idx = String.valueOf(claims.getBody().get("idx"));
        return Long.parseLong(member_idx);
    }

    public boolean deleteRefresh(String email) {
        log.info(METHOD_NAME + "- deleteRefresh() ...");
        try {
            redisRepository.deleteValue(email);
            return true;
        } catch (Exception e) {
            log.error("redis 키 삭제중 에러가 발생했습니다. " + METHOD_NAME, e);
        }
        return false;
    }

    public boolean banAccessToken(String accessToken) {
        log.info(METHOD_NAME + "- banAccessToken() ...");
        try {
            redisRepository.setValue(accessToken.replace(typeAccess, ""), String.format("%s logout at %s", SecurityManager.getCurrentMember().getEmail(), LocalDateTime.now()), Duration.ofMillis(accessValidTime));
            return true;
        } catch (Exception e) {
            log.error("redis 키 등록중 에러가 발생했습니다. " + METHOD_NAME, e);
        }
        return false;
    }
}
