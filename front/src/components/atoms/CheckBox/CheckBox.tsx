import StyledCheckBox from "./CheckBox.styled";
import { InputProps } from "./CheckBox.types";

const CheckBox = ({ checked, icon, onClick, size }: InputProps) => {
  return (
    <>
      <StyledCheckBox
        size={size}
        checked={checked}
        onClick={onClick}
        tw="cursor-none"
      >
        {checked && icon ? (
          <i
            style={{ paddingLeft: "1px" }}
            className={"fi fi-rr-" + { icon }.icon}
          ></i>
        ) : null}
      </StyledCheckBox>
    </>
  );
};
export default CheckBox;
