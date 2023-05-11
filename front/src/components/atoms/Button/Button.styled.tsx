import { getFontSize } from "@/constants";

import { SProps } from "./Button.types";

import tw, { styled } from "twin.macro";

const getVariant = {
  primary: [
    tw`text-blue-200 bg-blue-800`,
    tw`hocus:(text-blue-100 bg-blue-700)`,
  ],
  secondary: [
    tw`text-orange-200 bg-orange-800`,
    tw`hocus:(text-orange-100 bg-orange-700)`,
  ],
  disabled: [tw`text-lightgray-900 bg-lightgray-400`, tw`hocus:(scale-100)`],
  none: tw``,
};

const getOutlineVariant = {
  primary: [
    tw`border-2 text-blue-800 border-blue-800`,
    tw`hocus:(bg-blue-200)`,
  ],
  secondary: [
    tw`border-2 text-orange-800 border-orange-800`,
    tw`hocus:(bg-orange-200)`,
  ],
  disabled: [
    tw`border-2 text-lightgray-400 border-lightgray-400`,
    tw`hocus:(scale-100)`,
  ],
  none: tw``,
};

export const SButton = styled.button((props: SProps) => [
  tw`w-fit h-fit`,
  tw`px-2 py-1`,
  tw`rounded-[0.5rem]`,

  tw`duration-100`,
  tw`hover:(scale-[103%] bg-lightgray-600)`,

  props.variant &&
    (props.isOutline
      ? getOutlineVariant[props.variant]
      : getVariant[props.variant]),

  props.isBold && tw`font-bold`,
  props.fontSize && getFontSize[props.fontSize],
  props.custom,
]);

export default SButton;
