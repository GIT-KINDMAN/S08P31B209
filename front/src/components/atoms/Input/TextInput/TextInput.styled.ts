import { getSize } from "@/constants";

import { StyleProps } from "./TextInput.types";

import "@flaticon/flaticon-uicons/css/all/all.css";
import tw, { styled } from "twin.macro";

const getVariant = {
  primary: [tw`focus:(border-blue-400)`],
  secondary: [tw`focus:(border-orange-400)`],
  error: [tw`border-red-400`, tw`focus:(border-red-400)`],
  disabled: [tw`text-lightgray-400`, tw`focus:(border-lightgray-400)`],
  none: tw``,
};

export const StyledTextInput = styled.input((props: StyleProps) => [
  tw`inline-block px-4 w-full h-fit border-b-2`,

  tw`duration-75`,
  tw`focus:(outline-0 border-b-2 border-black)`,

  props.fontSize && getSize[props.fontSize],

  props.variant && getVariant[props.variant],

  props.custom,
]);

export default StyledTextInput;
