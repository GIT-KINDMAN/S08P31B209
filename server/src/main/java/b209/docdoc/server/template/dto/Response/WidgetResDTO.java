package b209.docdoc.server.template.dto.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WidgetResDTO {
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

    @Builder
    public WidgetResDTO(String widgetIdx, Long templateIdx, String widgetType, String widgetName, Integer widgetSx, Integer widgetSy, Integer widgetDx, Integer widgetDy, String widgetContent, Boolean widgetIsBase, Boolean widgetIsDeleted) {
        this.widgetIdx = widgetIdx;
        this.templateIdx = templateIdx;
        this.widgetType = widgetType;
        this.widgetName = widgetName;
        this.widgetSx = widgetSx;
        this.widgetSy = widgetSy;
        this.widgetDx = widgetDx;
        this.widgetDy = widgetDy;
        this.widgetContent = widgetContent;
        this.widgetIsBase = widgetIsBase;
        this.widgetIsDeleted = widgetIsDeleted;
    }

    public static WidgetResDTO of(String widgetIdx, Long templateIdx, String widgetType, String widgetName, Integer widgetSx, Integer widgetSy, Integer widgetDx, Integer widgetDy, String widgetContent, Boolean widgetIsBase, Boolean widgetIsDeleted) {
        return WidgetResDTO.builder()
                .widgetIdx(widgetIdx)
                .templateIdx(templateIdx)
                .widgetType(widgetType)
                .widgetName(widgetName)
                .widgetSx(widgetSx)
                .widgetSy(widgetSy)
                .widgetDx(widgetDx)
                .widgetDy(widgetDy)
                .widgetContent(widgetContent)
                .widgetIsBase(widgetIsBase)
                .widgetIsDeleted(widgetIsDeleted)
                .build();
    }
}