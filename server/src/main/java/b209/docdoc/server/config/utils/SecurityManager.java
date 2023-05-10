package b209.docdoc.server.config.utils;

import b209.docdoc.server.config.security.auth.MemberDTO;
import b209.docdoc.server.config.security.auth.PrincipalDetails;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityManager {

    public static MemberDTO getCurrentMember() {
        PrincipalDetails principalDetails = (PrincipalDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return principalDetails.getMember();
    }
}
