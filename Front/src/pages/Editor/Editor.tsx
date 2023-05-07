import EditorFooter from "@/components/organisms/EditorNav/EditorFooter";
import EditorHeader from "@/components/organisms/EditorNav/EditorHeader";

import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const Editor = () => {
  return (
    <Wrapper>
      <EditorHeader></EditorHeader>

      <div tw="py-10">
        <Outlet />
      </div>
      <EditorFooter></EditorFooter>
    </Wrapper>
  );
};

export default Editor;
