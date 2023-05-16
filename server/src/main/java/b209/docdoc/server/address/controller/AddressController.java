package b209.docdoc.server.address.controller;

import b209.docdoc.server.address.dto.Request.AddressEditorReq;
import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.service.AddressService;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/address")
@AllArgsConstructor
public class AddressController {

    private AddressService addressService;

    @PostMapping("/save")
    public ResponseEntity<ResponseDTO> saveOneAddress(@RequestBody AddressRegisterReq req) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_SAVE, addressService.saveOneAddress(req, SecurityManager.getCurrentMember())));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ResponseDTO> removeAddress(@RequestParam("id") String addressIdx) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_DELETE, addressService.removeAddress(addressIdx, SecurityManager.getCurrentMember())));
    }

    @DeleteMapping("/delete-group")
    public ResponseEntity<ResponseDTO> removeAddressByGroup(@RequestParam("group") String group) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_DELETE_GROUP, addressService.removeAddressByGroup(group, SecurityManager.getCurrentMember())));
    }

    @GetMapping("/list")
    public ResponseEntity<ResponseDTO> getAddressList(@RequestParam("group") String group) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_SEARCH, addressService.getAddressListByGroup(group, SecurityManager.getCurrentMember())));
    }

    @GetMapping("/list/editor")
    public ResponseEntity<ResponseDTO> getAddressListEditor(@RequestParam("name") String name) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_SEARCH, addressService.getAddressBoolListByName(name, SecurityManager.getCurrentMember())));
    }

    @PostMapping("/save/editor")
    public ResponseEntity<ResponseDTO> saveAddressListEditor(@RequestBody AddressEditorReq req) {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_ADDRESS_SAVE, addressService.saveAddressEditor(req, SecurityManager.getCurrentMember())));
    }
}
