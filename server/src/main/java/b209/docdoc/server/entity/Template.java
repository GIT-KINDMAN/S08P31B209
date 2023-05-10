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
	private Member member;

	@NotNull
	@Column(length = 50)
	private String templateUuid;

	@NotNull
	@Column(length = 50)
	private String templateName;

	@NotNull
	@Column(length = 20)
	private String templateDeadline;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean templateIsDeleted;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "templatefile_idx")
	private Templatefile templatefile;

	@Override
	public void prePersist() {
		super.prePersist();
	}
}
