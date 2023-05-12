package b209.docdoc.server.address.dto.Response;

import b209.docdoc.server.address.dto.AddressInfo;
import b209.docdoc.server.entity.AddressBook;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

import java.util.List;

@Setter
public class AddressListRes {
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<AddressInfo> addresses;

    public static AddressListRes of(List<AddressInfo> list) {
        AddressListRes res = new AddressListRes();
        res.setAddresses(list);

        return  res;
    }
}
