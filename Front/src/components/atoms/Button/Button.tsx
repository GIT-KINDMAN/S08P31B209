import StyledButton from "./Button.styled";
import { InputProps } from "./Button.types";

import "@flaticon/flaticon-uicons/css/all/all.css";

// hook, state, return해서 나오는 component
// style과 관련된 내용은 styled.ts안에 넣어서 분리

const Button = ({
  label,
  size,
  variant,
  icon,
}: React.PropsWithChildren<InputProps>) => {
  return (
    <>
      <div>
        {icon ? <i className={"fi fi-rr-" + { icon }.icon}></i> : null}
        <StyledButton variant={variant} size={size}>
          {label}
        </StyledButton>
      </div>
    </>
  );
};
export default Button;
