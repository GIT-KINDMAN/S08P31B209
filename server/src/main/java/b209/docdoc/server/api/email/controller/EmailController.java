package b209.docdoc.server.api.email.controller;

import b209.docdoc.server.api.email.service.EmailService;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(value = "email")
public class EmailController {
    private EmailService emailService;

    @GetMapping("/confirm")
    public ResponseEntity<ResponseDTO> emailConfirm(@RequestParam("email") String email) throws Exception {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_EMAIL_CONFIRM, emailService.sendSimpleMessage(email)));
    }

}
