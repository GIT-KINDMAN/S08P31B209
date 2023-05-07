/**
 * button 정의
 * button은 상호작용을 위한 최소한의 컴포넌트 단위이다.
 *
 * 1. button은 크기를 정의할 수 있어야 한다.
 * 2. button은 텍스트 또는 다른 태그를 포함할 수 있어야 한다.
 * 3. button은 색상을 정의 할 수 있어야 한다.
 * 4. button은 onclick 이벤트를 처리할 수 있어야 한다.
 * 5. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import StyledButton from "./Button.styled";
import { InputProps } from "./Button.types";

import { css } from "twin.macro";

const Button = ({
  children = "Button",
  size = "md",
  variant,
  isOutline = false,
  type = "button",
  buttonColor,
  focusColor,
  bgColor,
  isDisabled = false,
  custom,
  onClick,
}: React.PropsWithChildren<InputProps>) => {
  let color = buttonColor;
  if (typeof buttonColor == "string") {
    color = css`
      color: ${buttonColor};
    `;
  }

  let bg = bgColor;
  if (typeof bgColor == "string") {
    bg = css`
      background-color: ${bgColor};
    `;
  }

  let focus = focusColor;
  if (typeof focusColor == "string") {
    if (isOutline) {
      focus = css`
        &:hover,
        &:focus {
          background-color: ${focusColor};
        }
      `;
    } else {
      focus = css`
        &:hover,
        &:focus {
          color: ${focusColor};
        }
      `;
    }
  }

  if (isDisabled) {
    variant = "disabled";
  }

  return (
    <>
      <StyledButton
        variant={variant}
        isOutline={isOutline}
        buttonColor={color}
        focusColor={focus}
        bgColor={bg}
        size={size}
        type={type}
        custom={custom}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </StyledButton>
    </>
  );
};
export default Button;
