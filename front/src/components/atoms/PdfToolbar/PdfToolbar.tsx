import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const PdfToolbar = () => {
  return (
    <Wrapper tw="flex content-center">
      <Wrapper>뒤로</Wrapper>
      <Wrapper>앞으로</Wrapper>
      <Wrapper>확대</Wrapper>
      <Wrapper>배율퍼센트</Wrapper>
      <Wrapper>축소</Wrapper>
      <Wrapper>도움말</Wrapper>
    </Wrapper>
  );
};

export default PdfToolbar;
