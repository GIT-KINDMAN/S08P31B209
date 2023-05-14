//package b209.docdoc.server.controller;
//
//import b209.docdoc.server.config.utils.Msg;
//import b209.docdoc.server.dto.member.SignModReqDTO;
//import b209.docdoc.server.dto.member.signUp;
//import b209.docdoc.server.service.AuthService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@Slf4j
//@RestController
//@RequiredArgsConstructor
//public class AuthController {
//
//    private final AuthService authService;
//
//    @PostMapping("/sign")
//    public ResponseEntity<ResponseDTO> register(@RequestBody @Validated(signUp.class) SignModReqDTO signModReqDTO) {
//        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_REGISTER, authService.sign(signModReqDTO)));
//    }
//}
