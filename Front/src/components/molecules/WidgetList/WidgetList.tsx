import { Widget } from "@/components/atoms";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const WidgetList = () => {
  return (
    <Wrapper>
      <Wrapper>Title</Wrapper>
      <Wrapper tw="m-2">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </Wrapper>
    </Wrapper>
  );
};

export default WidgetList;
