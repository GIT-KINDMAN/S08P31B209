package b209.docdoc.server.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "trash")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Trash {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trashIdx;

//    @ManyToOne
//    @JoinColumn(name="template_idx")
//    private Docs template;
}

