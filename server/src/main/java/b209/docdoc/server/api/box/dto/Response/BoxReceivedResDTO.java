package b209.docdoc.server.api.box.dto.Response;

import b209.docdoc.server.domain.entity.Receiver;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    @Builder
    public BoxReceivedResDTO(String receiverDocsName, String receiverDeadline, String receiverSenderName, String receiverSenderEmail, String receiverEmail, String receiverName, BoxTemplateResDTO template, LocalDateTime createdDate, LocalDateTime updatedDate) {
        this.receiverDocsName = receiverDocsName;
        this.receiverDeadline = receiverDeadline;
        this.receiverSenderName = receiverSenderName;
        this.receiverSenderEmail = receiverSenderEmail;
        this.receiverEmail = receiverEmail;
        this.receiverName = receiverName;
        this.template = template;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }

    public static BoxReceivedResDTO of(String receiverDocsName, String receiverDeadline, String receiverSenderName, String receiverSenderEmail, String receiverEmail, String receiverName, BoxTemplateResDTO template, LocalDateTime createdDate, LocalDateTime updatedDate) {
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
                .createdDate(createdDate)
                .updatedDate(updatedDate)
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
                .createdDate(receiver.getCreatedDate())
                .updatedDate(receiver.getUpdatedDate())
                .build();
    }
}
