package b209.docdoc.server.api.address.dto.Request;

import b209.docdoc.server.api.address.dto.AddressInfo;
import lombok.Getter;

import java.util.List;

@Getter
public class AddressEditorReq {
    List<AddressInfo> addresses;
}
