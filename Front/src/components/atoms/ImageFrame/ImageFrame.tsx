import StyledImageFrame from "./ImageFrame.styled";
import { InputProps } from "./ImageFrame.types";

const ImageFrame = ({ imageUrl }: InputProps) => {
  return <>{imageUrl && <StyledImageFrame src={imageUrl} />}</>;
};
export default ImageFrame;
