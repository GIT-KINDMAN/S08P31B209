package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "trash")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Trash extends BaseDateTime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trashIdx;

    //    @ManyToOne
//    @JoinColumn(name="template_idx")
//    private Docs template;
    @Override
    public void prePersist(){super.prePersist();}
}

