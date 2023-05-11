package b209.docdoc.server.email.controller;

import b209.docdoc.server.email.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/email")
public class EmailController {
    private EmailService emailService;

    @PostMapping("/confirm")
    public String emailConfirm(@RequestBody String email) throws Exception {

        String confirm = emailService.sendSimpleMessage(email);

        return confirm;
    }

}
