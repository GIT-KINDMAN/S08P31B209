package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "receiver")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Receiver extends BaseDateTime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long receiverIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "template_idx")
    private Template template;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "templatefile_idx")
    private Templatefile templatefile;

    @NotNull
    @Column(length = 50)
    String receiverDocsName;

    @NotNull
    @Column(length = 20)
    String receiverDeadline;

    @NotNull
    @Convert(converter = BooleanToYNConverter.class)
    Boolean receiverIsMember;

    @NotNull
    @Convert(converter = BooleanToYNConverter.class)
    Boolean receiverIsCompleted;

    @NotNull
    @Column(length = 10)
    String receiverSenderName;

    @NotNull
    @Column(length = 50)
    String receiverSenderEmail;

    @NotNull
    @Convert(converter = BooleanToYNConverter.class)
    Boolean receiverIsDeleted;

    @NotNull
    @Column(length = 50)
    String receiverEmail;

    @Override
    public void prePersist() {
        super.prePersist();
    }

    public void updateDelete(boolean receiverIsCompleted) {
        this.receiverIsCompleted = receiverIsCompleted;
    }
}
