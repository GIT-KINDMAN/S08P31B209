package b209.docdoc.server.address.service;

import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.dto.Response.AddressListRes;

public interface AddressService {
    public void saveOneaddress(AddressRegisterReq req, String memberEmail);
    public AddressListRes getAddressList(String group, String memberEmail);
}
