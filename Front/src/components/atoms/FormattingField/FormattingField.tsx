import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const FormattingField = () => {
  return (
    <Wrapper>
      <div>서식</div>
      <Wrapper>폰트</Wrapper>
      <Wrapper>폰트 크기</Wrapper>
      <Wrapper>
        글씨 정렬<div>아이콘 아이콘 아이콘</div>
      </Wrapper>
    </Wrapper>
  );
};

export default FormattingField;
