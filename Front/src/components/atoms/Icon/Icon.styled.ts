import { getSize } from "@/constants";

import { StyleProps } from "./Icon.types";

import "@flaticon/flaticon-uicons/css/all/all.css";
import tw, { styled } from "twin.macro";

export const StyledIcon = styled.i((props: StyleProps) => [
  tw`inline-block text-center h-fit`,
  props.size && getSize[props.size],
  props.iconColor,
  props.custom,
]);

export default StyledIcon;
