package b209.docdoc.server.domain.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
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
@Table(name = "profile")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Profile extends BaseDateTime implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="imagefile_idx")
    private Imagefile imagefile;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="member_idx")
    private Member member;

    @NotNull
    @Column(length = 50)
    private String profileName;

    @NotNull
    @Column(length = 10)
    private String profilePosition;


}
