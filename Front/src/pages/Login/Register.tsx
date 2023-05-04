import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Register = () => {
  return (
    <>
      <Wrapper>
        <Wrapper>DocDocLogo</Wrapper>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper>프로필사진 입력</Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> 이메일 입력 </Wrapper>
          <Wrapper> 비밀번호 입력 </Wrapper>
          <Wrapper> 비밀번호 확인 </Wrapper>
          <Wrapper> 이름 입력 </Wrapper>
          <Wrapper> 생년월일 입력 </Wrapper>
          <Wrapper> 성별 입력 </Wrapper>
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
