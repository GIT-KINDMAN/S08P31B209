package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseAtTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import b209.docdoc.server.dto.member.SignModReqDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@DynamicInsert
@DynamicUpdate
@Entity
@Table(name = "member")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member extends BaseAtTime implements Serializable {

	// 사용자 Idx
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long memberIdx;

	@NotNull
	@Column(length = 50)
	private String memberPassword; // 사용자 pwd

	@NotBlank
	@Column(length = 10)
	private String memberName; // 사용자 name

	@NotNull
	@Column(length = 30)
	private String memberEmail; // 사용자 email

	@NotNull
	@Column(length = 15)
	private String memberPhone; // 사용자 연락처

	@NotBlank
	@Column(length = 10)
	private String memberGender;//사용자 성별

    @Column(length=10)
    private String memberGroup;

    @Column(length = 100)
    private String memberAddress;

    @Column(length = 10)
    private String memberPosition;

    @Column(length = 10)
    private String memberBirthday;

	@Convert(converter = BooleanToYNConverter.class)
	private Boolean memberIsDeleted; //사용자 삭제여부

	@Override
	public void prePersist() {
		super.prePersist();
	}
//    public void update(SignModReqDTO signModReqDTO) {
//        this.memberName = signModReqDTO.getName();
//        this.memberEmail = signModReqDTO.getEmail();
//        this.tel = signModReqDTO.getTel();
//    }

//    public void update(String newPassword) {
//        this.password = newPassword;
//    }

}
