import UploadButton from "@/assets/UploadButton.png";
import deleteButton from "@/assets/deleteButton.png";
import { ImageFrame } from "@/components/atoms";

import { UploadDocs } from "./EditorUpdloadDocs.styled";

import { useState } from "react";
import tw from "twin.macro";

const EditorUploadDocs = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <UploadDocs>
      <div tw="flex ml-8 my-4 font-bold">
        <div tw="mr-4">문서 업로드</div>
        {/* 이미지 프레임에 onClick 시 업로드 창 생각해야함 */}
        <div tw="mr-2 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
          <ImageFrame width={6} height={1.5} imageUrl={UploadButton} />
        </div>
        {isChecked === true ? (
          <div tw="cursor-pointer">
            <ImageFrame width={6} height={1.5} imageUrl={deleteButton} />
          </div>
        ) : null}
      </div>
      <div tw="border-2 text-center py-10">업로드용 박스</div>
    </UploadDocs>
  );
};

export default EditorUploadDocs;
