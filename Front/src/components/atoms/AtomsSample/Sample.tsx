import StyledSample from "./Sample.styled";
import { InputProps } from "./Sample.types";

const Sample = ({ label = "test", variable }: InputProps) => {
  return (
    <>
      <StyledSample variable={variable}>{label}</StyledSample>
    </>
  );
};
export default Sample;
