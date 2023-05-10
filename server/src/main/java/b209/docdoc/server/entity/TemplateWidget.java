package b209.docdoc.server.entity;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Document(collection = "templatewidget")
public class TemplateWidget {

    @Id
    private Long templateIdx;

    private int templateX;
    private int templateY;
    private int templateDx;
    private int templateDy;
    private String templateType;
    private String templateInputText;
    private String templateUuid;

}
