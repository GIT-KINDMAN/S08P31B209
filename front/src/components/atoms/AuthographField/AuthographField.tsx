import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const AuthographField = () => {
  return (
    <Wrapper>
      <div>서명 필드</div>
      <div>이름 서명(필수)</div>
    </Wrapper>
  );
};

export default AuthographField;
