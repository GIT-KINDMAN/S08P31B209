import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Auth = () => {
  return (
    <>
      <Wrapper>
        <Wrapper>DocDocLogo</Wrapper>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Auth;
