/**
 * textInput 정의
 * textInput은 텍스트를 입력받는 최소한의 컴포넌트 단위이다.
 *
 * 1. textInput은 텍스트 크기를 정의할 수 있어야 한다.
 * 2. textInput은 각종 이벤트를 처리할 수 있어야 한다.
 * 3. 그외의 나머지 속성을 custom 할 수 있어야 한다.
 */
import StyledTextInput from "./TextInput.styled";
import { InputProps } from "./TextInput.types";

const TextInput = ({
  id,
  type,
  value,
  placeholder,
  variant,
  fontSize = "md",
  isDisabled = false,
  custom,
  onclick,
  onchange,
  oninput,
  onkeyup,
  onfocus,
  onblur,
}: InputProps) => {
  if (isDisabled) {
    variant = "disabled";
  }

  return (
    <>
      <StyledTextInput
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        variant={variant}
        fontSize={fontSize}
        custom={custom}
        onClick={onclick}
        onChange={onchange}
        onInput={oninput}
        onKeyUp={onkeyup}
        onFocus={onfocus}
        onBlur={onblur}
        disabled={isDisabled}
      />
    </>
  );
};
export default TextInput;
