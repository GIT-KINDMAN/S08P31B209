import { TextArea } from "@/components/atoms";

import { CreateName } from "./EditorCreateName.styled";

// import tw from "twin.macro";

const EditorCreateName = () => {
  return (
    <CreateName>
      <div tw="ml-8 my-4 font-bold">템플릿 이름</div>
      <div tw="text-center m-4 ">
        <TextArea variant="default" />
      </div>
    </CreateName>
  );
};

export default EditorCreateName;
