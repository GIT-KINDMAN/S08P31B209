package b209.docdoc.server.entity;

import b209.docdoc.server.config.utils.BaseDateTime;
import b209.docdoc.server.config.utils.BooleanToYNConverter;
import b209.docdoc.server.member.dto.Request.UpdateUserReqDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
public class Member extends BaseDateTime implements Serializable {

	// 사용자 Idx
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="member_idx")
	private Long memberIdx;

	@NotNull
	@Column(length = 255)
	private String memberPassword; // 사용자 pwd

	@NotBlank
	@Column(length = 10)
	private String memberName; // 사용자 name

	@NotNull
	@Column(length = 30)
	private String memberEmail; // 사용자 email

	@Column(length = 15)
	private String memberPhone; // 사용자 연락처

	@Column(length = 10)
	private String memberGender;//사용자 성별

	@Column(length = 10)
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

    public void update(UpdateUserReqDTO updateUserReqDTO) {
        this.memberPhone = updateUserReqDTO.getPhone();
        this.memberAddress = updateUserReqDTO.getGroup();
        this.memberGroup = updateUserReqDTO.getGroup();
		this.memberPosition = updateUserReqDTO.getPosition();
    }

//    public void update(String newPassword) {
//        this.password = newPassword;
//    }

}
