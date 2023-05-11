import { Button } from "@/components/atoms";

// import { useState } from "react";
import tw from "twin.macro";

const EditorCreateContent = () => {
  return (
    // 템플릿 작성 상단 생성, 불러오기 버튼
    <div tw="flex flex-col justify-center  ">
      <div tw="flex  pb-6 ">
        <div tw="m-4">
          <Button variant="primary" isOutline={true} children="템플릿 생성" />
        </div>
        <div tw="m-4">
          <Button
            variant="primary"
            isOutline={true}
            children="템플릿 불러오기"
            custom={tw`w-[10rem] h-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorCreateContent;
