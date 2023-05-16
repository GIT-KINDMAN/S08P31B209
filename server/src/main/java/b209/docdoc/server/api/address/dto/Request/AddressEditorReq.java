package b209.docdoc.server.api.address.dto.Request;

import b209.docdoc.server.api.address.dto.AddressInfoSimple;
import lombok.Getter;

import java.util.List;

@Getter
public class AddressEditorReq {
    List<AddressInfoSimple> addresses;
}
