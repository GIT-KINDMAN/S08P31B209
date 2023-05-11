import EditorCreateName from "@/components/molecules/EditdorCreateName/EditorCreateName";
import EditorCreateButton from "@/components/molecules/EditorCreateButton/EditorCreateButton";
import EditorUploadDocs from "@/components/molecules/EditorUploadDocs/EditorUploadDocs";

import { CreateContent } from "./EditorCreate.styled";

// import { useState } from "react";
// import tw from "twin.macro";

const EditorCreate = () => {
  return (
    <CreateContent tw=" min-h-screen">
      <EditorCreateButton />
      <EditorCreateName />
      <EditorUploadDocs />
    </CreateContent>
  );
};

export default EditorCreate;
