import { getSize } from "@/constants";

import { StyleProps } from "./Label.types";

import tw, { css, styled } from "twin.macro";

export const StyledLabel = styled.div((props: StyleProps) => [
  tw`inline-block text-center h-fit`,
  getSize[props.size ?? "md"],
  props.labelColor,
  props.bgColor,
  props.isBold && tw`font-bold`,
  css`
    font-style: ${props.fontStyle};
  `,
]);

export default StyledLabel;
