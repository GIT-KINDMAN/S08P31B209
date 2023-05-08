import EditorProgress from "../../molecules/EditorProgress/EditorProgress";
import { NavHeader } from "./EditorNav.styled";

const EditorHeader = () => {
  return (
    <NavHeader>
      <EditorProgress />
    </NavHeader>
  );
};

export default EditorHeader;
