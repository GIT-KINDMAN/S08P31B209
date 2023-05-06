import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const Editor = () => {
  return (
    <Wrapper>
      <Wrapper tw="top-0 fixed flex">
        Header
        <Wrapper tw="ml-auto"> Step</Wrapper>
      </Wrapper>
      <Wrapper tw="text-center">
        <Outlet />
      </Wrapper>
      <Wrapper tw="fixed bottom-0 text-center w-screen">
        {" "}
        footer
        <div tw="flex mx-2 ">
          <Wrapper> 이 전</Wrapper>
          <Wrapper> 다 음</Wrapper>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Editor;
