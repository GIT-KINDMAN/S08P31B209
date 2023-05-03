import { InputProps } from "./ImageFrame.types";

import tw, { css, styled } from "twin.macro";

export const StyledImageFrame = styled.div(
  ({ width, height, unit = "rem" }: InputProps) => [
    typeof width === "undefined"
      ? tw`w-fit`
      : css`
          width: ${width}${unit};
        `,
    typeof height === "undefined"
      ? tw`h-fit`
      : css`
          height: ${height}${unit};
        `,
  ],
);

export const StyledImage = styled.img(() => [
  tw`[object-fit: fill] w-full h-full`,
]);

export default StyledImageFrame;
