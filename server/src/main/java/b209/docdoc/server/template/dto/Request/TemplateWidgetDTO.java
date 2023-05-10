package b209.docdoc.server.template.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/*
x: x 왼쪽위 좌표
y: y: 왼쪽위 좌표
dx: 가로 길이
dy: 세로 길이
type: 태그 이름
* */
@Getter
@Setter
@NoArgsConstructor
public class TemplateWidgetDTO {
    int x;
    int y;
    int dx;
    int dy;
    String type;
    String inputText;

    @Builder
    public TemplateWidgetDTO(int x, int y, int dx, int dy, String type, String inputText) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.type = type;
        this.inputText = inputText;
    }

    public static TemplateWidgetDTO of(int x, int y, int dx, int dy, String type, String inputText){
        return TemplateWidgetDTO.builder()
                .x(x)
                .y(y)
                .dx(dx)
                .dy(dy)
                .type(type)
                .inputText(inputText)
                .build();
    }
}




