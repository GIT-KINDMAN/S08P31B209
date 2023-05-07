import { Button } from "@/components/atoms";

import tw from "twin.macro";

const EditorCreateContent = () => {
  return (
    // 템플릿 작성 상단 생성, 불러오기 버튼
    <div tw="flex justify-center">
      <div tw="m-4">
        <Button variant="editorcreate" label="템플릿 생성" />
      </div>
      <div tw="m-4">
        <Button variant="editorcreate" label="템플릿 불러오기" />
      </div>
    </div>
  );
};

export default EditorCreateContent;
