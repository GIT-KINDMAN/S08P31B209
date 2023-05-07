import EditorFooter from "@/components/organisms/EditorNav/EditorFooter";
import EditorHeader from "@/components/organisms/EditorNav/EditorHeader";

import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black`);

const Editor = () => {
  return (
    <Wrapper>
      <EditorHeader></EditorHeader>

      <Outlet tw="text-center" />

      {/* <Wrapper tw="fixed bottom-0 text-center w-screen">
        {" "}
        footer
        <div tw="flex mx-2 ">
          <Wrapper> 이 전</Wrapper>
          <Wrapper> 다 음</Wrapper>
        </div>
      </Wrapper> */}
      <EditorFooter></EditorFooter>
    </Wrapper>
  );
};

export default Editor;
