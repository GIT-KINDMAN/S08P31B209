import { Title } from "./IntroTitle.styled";
import { inputProps } from "./IntroTitle.types";

const IntroTitle = ({ title }: inputProps) => {
  return (
    <div>
      <Title type="intro">{title}</Title>
    </div>
  );
};

export default IntroTitle;
