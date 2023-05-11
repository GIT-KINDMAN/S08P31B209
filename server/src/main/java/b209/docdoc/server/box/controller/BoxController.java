package b209.docdoc.server.box.controller;

import b209.docdoc.server.box.service.Impl.BoxServiceImpl;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
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

    private final BoxServiceImpl boxServiceImpl;

    @GetMapping("/templates")
    public ResponseEntity<ResponseDTO> getTemplates(
            @RequestParam(value = "keywords", required = false) List<String> keywords,
            @RequestParam(value = "nameSort", defaultValue = "asc") String nameSort,
            @RequestParam(value = "createdDateSort", defaultValue = "asc") String createdDateSort,
            @RequestParam(value = "updatedDateSort", defaultValue = "asc") String updatedDateSort,
            @AuthenticationPrincipal String userEmail,
            @PageableDefault(size = 10, page = 1) Pageable pageable) {

        return ResponseEntity.ok()
                .body(ResponseDTO.of(HttpStatus.OK,
                        Msg.SUCCESS_TEMPLATE_SEARCH,
                        boxServiceImpl.getTemplates(userEmail, keywords, nameSort, createdDateSort, updatedDateSort, pageable)));
    }

    @DeleteMapping("/sent/{template_id}")
    public ResponseEntity<ResponseDTO> deleteTemplates(@PathVariable("template_id") Long templateId){
        return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_TEMPLATE_SEARCH, boxServiceImpl.deleteTemplates(templateId)));
    }

}