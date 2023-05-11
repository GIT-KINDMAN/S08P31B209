import { getSize } from "@/constants";

import { SProps } from "./Icon.types";

import "@flaticon/flaticon-uicons/css/all/all.css";
import tw, { styled } from "twin.macro";

export const SIcon = styled.i((props: SProps) => [
  tw`inline-block`,
  tw`w-fit h-fit`,

  props.size && getSize[props.size],
  props.custom,
]);

export default SIcon;
