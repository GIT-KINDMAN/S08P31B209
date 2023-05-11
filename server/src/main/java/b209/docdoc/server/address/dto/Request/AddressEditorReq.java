package b209.docdoc.server.address.dto.Request;

import b209.docdoc.server.address.dto.AddressInfo;
import lombok.Getter;

import java.util.List;

@Getter
public class AddressEditorReq {
    List<AddressInfo> addresses;
}
