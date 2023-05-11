import { getFontSize } from "@/constants";

import { SProps } from "./Label.types";

import tw, { styled } from "twin.macro";

export const SLabel = styled.div((props: SProps) => [
  tw`w-fit h-fit`,
  tw`px-2`,
  tw`text-base text-center`,

  props.isBold && tw`font-bold`,
  props.fontSize && getFontSize[props.fontSize],
  props.custom,
]);

export default SLabel;
