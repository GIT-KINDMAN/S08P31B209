package b209.docdoc.server.address.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AddressInfo {
    Long id;
    String name;
    String email;
    String phone;
    String group;
}
