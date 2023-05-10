import { StyleProps } from "./Button.types";

import tw, { css, styled } from "twin.macro";

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

const getSize = {
  sm: tw`text-xs [font-weight: bold]`,
  md: tw`text-base [font-weight: bold]`,
  lg: tw`text-xl [font-weight: bold]`,
};

export const StyledButton = styled.button((props: StyleProps) => [
  tw`px-4 py-2 rounded`,

  tw`scale-100 duration-75`,
  tw`hocus:(scale-110)`,

  props.size && getSize[props.size],

  props.variant &&
    (props.isOutline
      ? getOutlineVariant[props.variant]
      : getVariant[props.variant]),

  props.buttonColor,
  props.focusColor,
  props.bgColor,

  props.custom,
]);

export default StyledButton;
