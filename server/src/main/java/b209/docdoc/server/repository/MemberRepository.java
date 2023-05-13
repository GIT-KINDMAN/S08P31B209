package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMemberEmail(String memberEmail);

    boolean existsByMemberEmail(String memberEmail);

    @Query("update Member m set m.memberName = :name, m.memberPhone = :phone where m.memberIdx= :idx")
    @Modifying(clearAutomatically = true)
    int updateMember(@Param("name") String name, @Param("phone") String phone, @Param("idx") long idx);

    @Query("select m.memberIdx from Member m where m.memberEmail like :memberEmail")
    Long findIdxByMemberEmail(String memberEmail);
}
