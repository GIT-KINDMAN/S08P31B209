package b209.docdoc.server.api.address.dto.Request;

import lombok.Getter;

@Getter
public class AddressRegisterReq {
    String name;
    String email;
    String phone;
    String group;
    String position;
}
