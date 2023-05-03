import DefaultImg from "@/assets/react.svg";

import { StyledImage, StyledImageFrame } from "./ImageFrame.styled";
import { InputProps } from "./ImageFrame.types";

const ImageFrame = ({ width, height, unit, imageUrl }: InputProps) => {
  return (
    <>
      <StyledImageFrame width={width} height={height} unit={unit}>
        {imageUrl === undefined ? (
          <StyledImage src={DefaultImg} />
        ) : (
          <StyledImage src={imageUrl} />
        )}
      </StyledImageFrame>
    </>
  );
};
export default ImageFrame;
