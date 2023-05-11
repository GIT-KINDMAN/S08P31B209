/**
 * image 정의
 * image는 이미지를 띄우는 최소한의 컴포넌트 단위이다.
 *
 * 1. image는 onclick 이벤트를 처리할 수 있어야 한다.
 * 2. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import DefaultImg from "@/assets/react.svg";

import { SImage, SImageFrame } from "./Image.styled";
import { IProps } from "./Image.types";

const Image = ({
  id,
  className,
  imageUrl = DefaultImg,
  custom,
  isDisabled = false,
  isHidden = false,
  onClick,
}: IProps) => {
  return (
    <>
      <SImageFrame
        id={id}
        className={className}
        custom={custom}
        onClick={isDisabled === true ? () => null : onClick}
        hidden={isHidden}
      >
        <SImage src={imageUrl} />
      </SImageFrame>
    </>
  );
};
export default Image;
