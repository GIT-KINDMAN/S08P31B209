import { StepWord } from "./Step.styled";
import { inputProps } from "./Step.types";

const Step = ({ label, active }: inputProps) => {
  return (
    <div tw="flex m-auto">
      <StepWord active={active}>{label} </StepWord>
    </div>
  );
};

export default Step;
