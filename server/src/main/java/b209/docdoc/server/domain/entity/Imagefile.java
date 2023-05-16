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
@Table(name = "imagefile")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Imagefile extends BaseDateTime implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "imagefile_idx")
    Long imagefileIdx;

    @NotNull
    @Column(length = 50)
    String imagefileOriginalName;

    @NotNull
    @Column(length = 50)
    String imagefileSavedName;

    @NotNull
    @Column(length = 100)
    String imagefileSavedPath;

    @Override
    public void prePersist(){super.prePersist();}
}
