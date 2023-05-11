// import { getFontSize } from "@/constants";
import { StyleProps } from "./Label.types";

import tw, { styled } from "twin.macro";

export const StyledLabel = styled.div((props: StyleProps) => [
  tw`inline-block text-center h-fit`,
  // getFontSize[props.size],
  props.labelColor,
  props.isBold && tw`font-bold`,
  props.custom,
]);

export default StyledLabel;
