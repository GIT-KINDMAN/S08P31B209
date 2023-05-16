package b209.docdoc.server.api.template.dto.Request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TemplateCopyReqDTO {
    private String oldTemplateUuid;
}