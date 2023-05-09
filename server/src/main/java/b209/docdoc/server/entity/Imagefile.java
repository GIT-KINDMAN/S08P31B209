package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "imagefile")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Imagefile extends BaseDateTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "imagefile_idx")
    Long imagefileIdx;

    @NotNull
    @Column(length = 50)
    String imagefileOrifinalName;

    @NotNull
    @Column(length = 50)
    String imagefileSavedName;

    @NotNull
    @Column(length = 100)
    String imagefileSavedPath;
}
