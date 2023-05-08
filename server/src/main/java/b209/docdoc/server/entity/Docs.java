package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "docs")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Docs extends BaseDateTime implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long docsIdx;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_idx")
	private Member memberIdx;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "docsfile_idx")
	private Docsfile docsfileIdx;

	@NotNull
	@Column(length = 100)
	private String docsType;

	@NotNull
	@Column(length = 50)
	private String docsName;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean docsIsFavorite;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean docsIsCompleted;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean docsIsDeleted;

	@Column(columnDefinition = "DATETIME")
	private LocalDateTime docsDeadline;

	@NotNull
	@Column(length = 10)
	private String docsToName;

	@NotNull
	@Column(length = 30)
	private String docsToEmail;

	@NotNull
	@Column(length = 10)
	private String docsFromName;

	@NotNull
	@Column(length = 30)
	private String docsFromEmail;




	@Override
	public void prePersist() {
		super.prePersist();
	}
}
