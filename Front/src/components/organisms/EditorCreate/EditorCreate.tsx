import EditorCreateContent from "@/components/molecules/EditorCreateContent/EditorCreateContent";

import { CreateContent } from "./EditorCreate.styled";

import tw from "twin.macro";

const EditorCreate = () => {
  return (
    <CreateContent>
      <EditorCreateContent />
    </CreateContent>
  );
};

export default EditorCreate;
