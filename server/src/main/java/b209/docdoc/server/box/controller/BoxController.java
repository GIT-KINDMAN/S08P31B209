package b209.docdoc.server.box.controller;

import b209.docdoc.server.box.service.BoxService;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/box")
@RequiredArgsConstructor
public class BoxController {

    private static final String METHOD_NAME = BoxController.class.getName();

    private final BoxService boxService;

    @GetMapping("/received-templates")
    public ResponseEntity<ResponseDTO> getReceivedTemplates(
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @RequestParam(value = "deadlineSort", defaultValue = "asc") String deadlineSort,
            @AuthenticationPrincipal String receiverEmail,
            @PageableDefault(size = 10, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxService.getReceivedTemplates(receiverEmail, nameSort, createdDateSort, updatedDateSort, deadlineSort, pageable)));
    }

    @GetMapping("/sent-templates")
    public ResponseEntity<ResponseDTO> getSentTemplates(
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @RequestParam(value = "deadlineSort", defaultValue = "asc") String deadlineSort,
            @AuthenticationPrincipal String memberEmail,
            @PageableDefault(size = 10, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxService.getSentTemplates(memberEmail, nameSort, createdDateSort, updatedDateSort, deadlineSort, pageable)));
    }
}