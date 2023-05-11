import { getFontSize } from "@/constants";

import { SProps } from "./TextInput.types";

import tw, { styled } from "twin.macro";

const getVariant = {
  primary: [tw`focus:(border-blue-400)`],
  secondary: [tw`focus:(border-orange-400)`],
  error: [tw`border-red-400`, tw`focus:(border-red-400)`],
  disabled: [tw`text-lightgray-400`, tw`focus:(border-lightgray-400)`],
  none: tw``,
};

export const STextInput = styled.input((props: SProps) => [
  tw`w-full h-fit`,
  tw`px-2`,
  tw`text-base`,
  tw`border-b border-lightgray-400`,

  tw`duration-100`,
  tw`focus:(outline-0 border-b-2 border-black)`,

  props.variant && getVariant[props.variant],
  props.fontSize && getFontSize[props.fontSize],
  props.custom,
]);

export default STextInput;
