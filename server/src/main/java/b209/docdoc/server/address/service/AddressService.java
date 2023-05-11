package b209.docdoc.server.address.service;

import b209.docdoc.server.address.dto.Request.AddressEditorReq;
import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.dto.Response.AddressListRes;

public interface AddressService {
    public void saveOneAddress(AddressRegisterReq req, String memberEmail);
    public AddressListRes getAddressListByGroup(String group, String memberEmail);
    public AddressListRes getAddressBoolListByName(String name, String memberEmail);
    public void saveAddressEditor(AddressEditorReq req, String memberEmail);
}
