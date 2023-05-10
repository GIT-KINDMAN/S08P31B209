import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const ContentField = () => {
  return (
    <Wrapper>
      <div>텍스트내용</div>
      <Wrapper>텍스트상자</Wrapper>
    </Wrapper>
  );
};

export default ContentField;
