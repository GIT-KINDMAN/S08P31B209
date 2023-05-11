import { SProps } from "./Image.types";

import tw, { styled } from "twin.macro";

export const SImageFrame = styled.div((props: SProps) => [
  tw`w-fit h-fit`,
  tw`p-1`,
  props.custom,
]);

export const SImage = styled.img(() => [
  tw` w-full h-full`,
  tw`[object-fit: fill]`,
]);

export default SImageFrame;
