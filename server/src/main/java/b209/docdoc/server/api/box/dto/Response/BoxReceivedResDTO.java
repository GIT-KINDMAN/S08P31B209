package b209.docdoc.server.api.box.dto.Response;

import b209.docdoc.server.domain.entity.Receiver;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoxReceivedResDTO {
    private String receiverDocsName;
    private String receiverDeadline;
    private String receiverSenderName;
    private String receiverSenderEmail;
    private String receiverEmail;
    private String receiverName;
    private BoxTemplateResDTO template;

    @Builder
    public BoxReceivedResDTO(String receiverDocsName, String receiverDeadline, String receiverSenderName, String receiverSenderEmail, String receiverEmail, String receiverName, BoxTemplateResDTO template) {
        this.receiverDocsName = receiverDocsName;
        this.receiverDeadline = receiverDeadline;
        this.receiverSenderName = receiverSenderName;
        this.receiverSenderEmail = receiverSenderEmail;
        this.receiverEmail = receiverEmail;
        this.receiverName = receiverName;
        this.template = template;
    }

    public static BoxReceivedResDTO of(String receiverDocsName, String receiverDeadline, String receiverSenderName, String receiverSenderEmail, String receiverEmail, String receiverName, BoxTemplateResDTO template) {
        return BoxReceivedResDTO.builder()
                .receiverDocsName(receiverDocsName)
                .receiverDeadline(receiverDeadline)
                .receiverDocsName(receiverDocsName)
                .receiverDeadline(receiverDeadline)
                .receiverSenderName(receiverSenderName)
                .receiverSenderEmail(receiverSenderEmail)
                .receiverEmail(receiverEmail)
                .receiverName(receiverName)
                .template(template)
                .build();
    }

    public static BoxReceivedResDTO of(Receiver receiver) {
        return BoxReceivedResDTO.builder()
                .receiverDocsName(receiver.getReceiverDocsName())
                .receiverDeadline(receiver.getReceiverDeadline())
                .receiverSenderName(receiver.getReceiverSenderName())
                .receiverSenderEmail(receiver.getReceiverSenderEmail())
                .receiverEmail(receiver.getReceiverEmail())
                .receiverName(receiver.getReceiverName())
                .template(BoxTemplateResDTO.of(receiver.getTemplate()))
                .build();
    }
}
