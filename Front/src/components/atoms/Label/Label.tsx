/**
 * label 정의
 * label은 텍스트를 띄우는 최소한의 컴포넌트 단위이다.
 *
 * 1. label은 크기를 정의할 수 있어야 한다.
 * 2. label은 글씨 색상을 정의 할 수 있어야 한다.
 * 3. label은 굵기를 정의할 수 있어야 한다.
 * 4. label은 onclick 이벤트를 처리할 수 있어야 한다.
 * 5. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import StyledLabel from "./Label.styled";
import { InputProps } from "./Label.types";

import tw, { css } from "twin.macro";

const Label = ({
  text = "Label",
  labelColor = tw`text-inherit`,
  size = "md",
  isBold = false,
  custom,
  onclick,
}: InputProps) => {
  let color = labelColor;
  if (typeof labelColor === "string") {
    color = css`
      color: ${labelColor};
    `;
  }

  return (
    <>
      <StyledLabel
        size={size}
        labelColor={color}
        isBold={isBold}
        custom={custom}
        onClick={onclick}
      >
        {text}
      </StyledLabel>
    </>
  );
};
export default Label;
