import StyledLabel from "./Label.styled";
import { InputProps } from "./Label.types";

import { css } from "twin.macro";

const Label = ({
  text = "Label",
  labelColor,
  bgColor,
  size,
  isBold,
  fontStyle,
  onclick,
}: InputProps) => {
  let color = labelColor;
  if (typeof labelColor == "string") {
    color = css`
      color: ${labelColor};
    `;
  }

  let backgroundColor = bgColor;
  if (typeof bgColor == "string") {
    backgroundColor = css`
      background-color: ${bgColor};
    `;
  }
  return (
    <>
      <StyledLabel
        size={size}
        labelColor={color}
        bgColor={backgroundColor}
        isBold={isBold}
        fontStyle={fontStyle}
        onClick={onclick}
      >
        {text}
      </StyledLabel>
    </>
  );
};
export default Label;
