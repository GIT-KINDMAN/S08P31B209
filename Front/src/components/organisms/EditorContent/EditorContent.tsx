import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const EditorContent = () => {
  return (
    <Wrapper tw="h-full">
      11
      <Wrapper>
        <div>상단 뭔가 도구들</div>
      </Wrapper>
      <Wrapper tw="grid grid-cols-6">
        <Wrapper>왼쪽 도구</Wrapper>
        <Wrapper tw="col-span-4">가운데 도구</Wrapper>
        <Wrapper>오른쪽 도구</Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default EditorContent;
