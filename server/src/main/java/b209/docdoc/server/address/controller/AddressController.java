package b209.docdoc.server.address.controller;

import b209.docdoc.server.address.dto.Request.AddressRegisterReq;
import b209.docdoc.server.address.service.AddressService;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/address")
@RequiredArgsConstructor
public class AddressController {
    private AddressService addressService;

    private String principalDetails = "ssafy@ssafy.com";

    @PostMapping("/save")
    public ResponseEntity<ResponseDTO> saveOneAddress(@RequestBody AddressRegisterReq req) throws Exception {//@AuthenticationPrincipal PrincipalDetails principalDetails,
        addressService.addressSaveOne(req, principalDetails);
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD));
    }

}
