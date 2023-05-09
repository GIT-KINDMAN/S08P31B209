import {
  AuthographField,
  ContentField,
  FormattingField,
} from "@/components/atoms";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const WidgetAttribute = () => {
  return (
    <Wrapper>
      <AuthographField />
      <FormattingField />
      <ContentField />
    </Wrapper>
  );
};

export default WidgetAttribute;
