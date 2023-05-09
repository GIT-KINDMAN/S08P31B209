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
import java.time.LocalDateTime;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "template")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Template extends BaseDateTime implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long templateIdx;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_idx")
	private Member memberIdx;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "templatefile_idx")
	private Templatefile templatefileIdx;

	@NotNull
	@Column(length = 50)
	private String templateUuid;

	@NotNull
	@Column(length = 100)
	private String templateType;

	@NotNull
	@Column(length = 50)
	private String templateName;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean templateIsFavorite;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean templateIsCompleted;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean templateIsDeleted;

	@Column(columnDefinition = "DATETIME")
	private LocalDateTime templateDeadline;

	@NotNull
	@Column(length = 10)
	private String templateToName;

	@NotNull
	@Column(length = 30)
	private String templateToEmail;

	@NotNull
	@Column(length = 10)
	private String templateFromName;

	@NotNull
	@Column(length = 30)
	private String templateFromEmail;


	@Override
	public void prePersist() {
		super.prePersist();
	}
}
