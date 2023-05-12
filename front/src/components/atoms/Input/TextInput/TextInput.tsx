/**
 * textInput 정의
 * textInput은 텍스트를 입력받는 최소한의 컴포넌트 단위이다.
 *
 * 1. textInput은 텍스트 크기를 정의할 수 있어야 한다.
 * 2. textInput은 각종 이벤트를 처리할 수 있어야 한다.
 * 3. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import STextInput from "./TextInput.styled";
import { IProps } from "./TextInput.types";

const TextInput = ({
  id,
  className,
  type,
  value,
  placeholder,
  fontSize = "md",
  variant,
  custom,
  isDisabled = false,
  isHidden = false,
  onClick,
  onChange,
  onInput,
  onKeyup,
  onFocus,
  onBlur,
}: IProps) => {
  if (isDisabled) {
    variant = "disabled";
  }

  return (
    <>
      <STextInput
        id={id}
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        fontSize={fontSize}
        variant={variant}
        custom={custom}
        onClick={isDisabled === true ? () => null : onClick}
        onChange={isDisabled === true ? () => null : onChange}
        onInput={isDisabled === true ? () => null : onInput}
        onKeyUp={isDisabled === true ? () => null : onKeyup}
        onFocus={isDisabled === true ? () => null : onFocus}
        onBlur={isDisabled === true ? () => null : onBlur}
        disabled={isDisabled}
        hidden={isHidden}
      />
    </>
  );
};
export default TextInput;
