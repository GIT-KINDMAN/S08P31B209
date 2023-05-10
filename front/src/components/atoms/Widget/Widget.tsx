import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const Widget = () => {
  return (
    <Wrapper tw="flex mt-2 mb-2">
      <Wrapper>아이콘</Wrapper>
      <Wrapper>내용</Wrapper>
    </Wrapper>
  );
};

export default Widget;
