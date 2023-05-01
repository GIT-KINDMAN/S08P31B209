import StyledCheckBox from "./CheckBox.styled";
import { InputProps } from "./CheckBox.types";

const CheckBox = ({ checked, icon, onChange }: InputProps) => {
  return (
    <>
      <StyledCheckBox checked={checked} onClick={onChange}>
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
