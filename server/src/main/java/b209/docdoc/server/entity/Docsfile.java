package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "docsfile")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Docsfile extends BaseDateTime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "docsfile_idx")
    private Long docsfileIdx;

    @NotBlank
    @Column(length = 50)
    private String docsfileOriginalName; // 문서 name

    @NotBlank
    @Column(length = 50)
    private String docsfileSavedName; // 문서 name

    @NotBlank
    @Column(length = 100)
    private String docsfileSavedPath; // 문서 path

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_idx")
    private Receiver receiver;

    @Override
    public void prePersist() {
        super.prePersist();
    }
}