import StyledRadio from "./Radio.styled";
import { InputProps } from "./Radio.types";

const Radio = ({ label, checked, onChange }: InputProps) => {
  return (
    <div>
      <StyledRadio checked={checked} onChange={onChange}></StyledRadio>
      <span>{label}</span>
    </div>
  );
};
export default Radio;
