package b209.docdoc.server.api.address.dto.Response;

import b209.docdoc.server.api.address.dto.AddressInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

import java.util.List;

@Setter
public class AddressListRes {
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<String> groups;

    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    List<AddressInfo> addresses;

    public static AddressListRes of(List<AddressInfo> addresses) {
        AddressListRes res = new AddressListRes();
        res.setAddresses(addresses);

        return  res;
    }

    public static AddressListRes of(List<String> groups, List<AddressInfo> addresses) {
        AddressListRes res = new AddressListRes();
        groups.add(0, "전체그룹");
        res.setGroups(groups);
        res.setAddresses(addresses);

        return  res;
    }
}
