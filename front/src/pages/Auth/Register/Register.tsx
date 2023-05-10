import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Register = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Wrapper>프로필사진 입력</Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 이메일 입력(필수) </Wrapper>
          <Wrapper> 비밀번호 입력(필수) </Wrapper>
          <Wrapper> 비밀번호 확인(필수) </Wrapper>
          <Wrapper> 이름 입력(필수) </Wrapper>
          <Wrapper> 생년월일 입력(필수) </Wrapper>
          <Wrapper> 성별 입력(필수) </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 연락처 입력 </Wrapper>
          <Wrapper> 거주지 입력 </Wrapper>
          <Wrapper> 소속 입력 </Wrapper>
          <Wrapper> 직위 입력 </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 회원가입 완료 </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
