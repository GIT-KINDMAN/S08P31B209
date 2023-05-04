import { Title } from "./MainTitle.styled";
import { inputProps } from "./MainTitle.types";

const MainTitle = ({ title }: inputProps) => {
  return (
    <div>
      <Title type="main">{title}</Title>
    </div>
  );
};

export default MainTitle;
