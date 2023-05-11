package b209.docdoc.server.boxtemp.service;

import b209.docdoc.server.boxtemp.dto.response.MemberProgressRes;
import b209.docdoc.server.config.security.auth.MemberDTO;

public interface BoxTempService {
    public MemberProgressRes getMemberProgress(Long templateIdx, MemberDTO member);
}
