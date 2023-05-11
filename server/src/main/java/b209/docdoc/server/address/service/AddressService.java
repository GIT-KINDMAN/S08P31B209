package b209.docdoc.server.address.service;

import b209.docdoc.server.address.dto.Request.AddressRegisterReq;

public interface AddressService {
    public void addressSaveOne(AddressRegisterReq req, String memberEmail);
}
