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
import SButton from "./Button.styled";
import { IProps } from "./Button.types";

const Button = ({
  children = "Button",
  id,
  className,
  // type = "button",
  fontSize = "md",
  isBold = false,
  isOutline = false,
  variant,
  custom,
  isDisabled = false,
  isHidden = false,
  onClick,
}: React.PropsWithChildren<IProps>) => {
  if (isDisabled) {
    variant = "disabled";
  }

  return (
    <>
      <SButton
        id={id}
        className={className}
        // type={type}
        fontSize={fontSize}
        isBold={isBold}
        isOutline={isOutline}
        variant={variant}
        custom={custom}
        onClick={isDisabled === true ? () => null : onClick}
        disabled={isDisabled}
        hidden={isHidden}
      >
        {children}
      </SButton>
    </>
  );
};
export default Button;
