import { Icon, TextInput } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const DocsHeader = ({ header }: HeaderProps) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <div className="Header ">
      <label tw="text-3xl">{header}</label>
      <hr tw="my-2 min-w-[64rem] max-w-[64rem]  border-t-2 border-blue-600"></hr>
      <div tw="flex justify-between min-w-[60rem] max-w-[60rem]">
        <div>
          <Icon icon="fi fi-br-search" custom={tw` ml-8 my-10`} />
          <TextInput
            className="DocsSearch"
            placeholder="문서 검색"
            custom={tw`min-w-[20rem] max-w-[20rem]  my-10`}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
        </div>
        <div tw="mx-8 my-10 ">
          {/* 문서추가 */}
          <span tw="border-r-2">
            <Icon
              icon="fi-rr-add-document"
              custom={tw`mx-2 px-2`}
              onClick={() => navigate("/editor/create")}
            />
          </span>
          {/* 다운로드 버튼 */}
          <span tw="border-r-2">
            <Icon
              icon="fi-br-download"
              custom={tw`mx-2 px-2`}
              onClick={() => console.log("다운로드 시작!")}
            />
          </span>
          {/* 삭제 */}
          <span>
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2`}
              onClick={() => console.log("문서 삭제!")}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DocsHeader;
