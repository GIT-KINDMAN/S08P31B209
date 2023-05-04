import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const Editor = () => {
  return (
    <Wrapper>
      <Wrapper tw="top-0 flex">
        Header
        <Wrapper tw="ml-auto"> Step</Wrapper>
      </Wrapper>
      <Wrapper tw="text-center">
        <div> content</div>
      </Wrapper>
      <Wrapper tw="bottom-0 text-center">
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
