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
@Table(name = "templatefile")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Templatefile extends BaseDateTime implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "templatefile_idx")
	private  Long templatefileIdx;

	@NotBlank
	@Column(length = 50)
	private String templatefileOriginalName; // 문서 name

	@NotBlank
	@Column(length = 50)
	private String templatefileSavedName; // 문서 name

	@NotBlank
	@Column(length = 100)
	private String templatefileSavedPath; // 문서 path

	@Override
	public void prePersist(){super.prePersist();}
}
