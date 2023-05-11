package b209.docdoc.server.address.service;

import b209.docdoc.server.address.dto.Request.AddressEditorReq;
import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.dto.Response.AddressListRes;
import b209.docdoc.server.config.security.auth.MemberDTO;

public interface AddressService {
    public void saveOneAddress(AddressRegisterReq req, MemberDTO member);
    public AddressListRes getAddressListByGroup(String group, MemberDTO member);
    public AddressListRes getAddressBoolListByName(String name, MemberDTO member);
    public void saveAddressEditor(AddressEditorReq req, MemberDTO member);
}
