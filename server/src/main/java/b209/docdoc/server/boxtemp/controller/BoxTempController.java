package b209.docdoc.server.boxtemp.controller;

import b209.docdoc.server.boxtemp.service.BoxTempService;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.config.utils.SecurityManager;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static b209.docdoc.server.config.utils.Msg.SUCCESS_TEMPLATE_SEARCH;

@RestController
@RequestMapping(value = "/boxTemp")
@AllArgsConstructor
public class BoxTempController {
    private BoxTempService boxTempService;
    @GetMapping("/progress")
    public ResponseEntity<ResponseDTO> getProgressInfo(@RequestParam("template_id") String templatedId) {
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, SUCCESS_TEMPLATE_SEARCH, boxTempService.getMemberProgress(Long.parseLong(templatedId), SecurityManager.getCurrentMember())));
    }
}
