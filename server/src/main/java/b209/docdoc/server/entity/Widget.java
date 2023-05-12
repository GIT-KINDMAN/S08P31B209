package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BooleanToYNConverter;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Document(collection = "widget")
public class Widget {
    private String widgetIdx;

    private Long templateIdx;
    private String widgetType;
    private String widgetName;
    private Integer widgetSx;
    private Integer widgetSy;
    private Integer widgetDx;
    private Integer widgetDy;
    private String widgetContent;
    private Boolean widgetIsBase;
    private Boolean widgetIsDeleted;
}
