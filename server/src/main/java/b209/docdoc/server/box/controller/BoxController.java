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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/box")
@RequiredArgsConstructor
public class BoxController {

    private static final String METHOD_NAME = BoxController.class.getName();

    private final BoxService boxService;

    @GetMapping("/templates")
    @ApiOperation(value = "Get templates", notes = "Get templates with optional filter")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 500, message = "Server error"),
    })
    public ResponseEntity<ResponseDTO> getTemplates(
            @RequestParam(value = "keywords", required = false) List<String> keywords,
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @PageableDefault(size = 9, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxService.getTemplates(keywords, nameSort, createdDateSort, updatedDateSort, pageable)));
    }


}
