import StyledRadio from "./Radio.styled";
import { InputProps } from "./Radio.types";

const Radio = ({ checked, onChange }: InputProps) => {
  return <StyledRadio checked={checked} onChange={onChange}></StyledRadio>;
};
export default Radio;
