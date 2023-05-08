import { StyleProps } from "./Image.types";

import tw, { styled } from "twin.macro";

export const StyledImageFrame = styled.div((props: StyleProps) => [
  props.custom,
]);

export const StyledImage = styled.img(() => [
  tw`[object-fit: fill] w-full h-full`,
]);

export default StyledImageFrame;
