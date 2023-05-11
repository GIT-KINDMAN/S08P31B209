package b209.docdoc.server.address.dto.Response;

import b209.docdoc.server.address.dto.AddressInfoBool;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

import java.util.List;

@Setter
public class AddressBoolListRes {
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<AddressInfoBool> addresses;

    public static AddressBoolListRes of (List<AddressInfoBool> list) {
        AddressBoolListRes res = new AddressBoolListRes();
        res.setAddresses(list);

        return res;
    }
}
