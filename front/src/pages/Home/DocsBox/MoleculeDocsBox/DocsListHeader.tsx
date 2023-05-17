import { Icon, Label, TextInput } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const DocsListHeader = ({ header }: HeaderProps) => {
  const [docsTarget, setDocsTarget] = useState("");

  useEffect(() => {
    if (header === "보낸 문서함") {
      setDocsTarget("수신자");
    } else if (header === "받은 문서함") {
      setDocsTarget("발신자");
    }
  }, []);

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="FileBox" tw="min-w-[60rem] max-w-[60rem] flex flex-col">
      <div>
        <div tw="flex justify-between min-w-[60rem] max-w-[60rem]">
          <div>
            <TextInput
              className="DocsSearch"
              placeholder="문서 검색"
              custom={tw`min-w-[20rem] max-w-[20rem]  my-10  py-2`}
              onChange={(e) => {
                setSearchText(e.target.value);
                console.log(searchText);
              }}
            />
            <Icon icon="fi fi-br-search" custom={tw`mx-2  `} />
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
      <div
        className="FileBoxHeader"
        tw="min-h-[3rem] max-h-[3rem] flex flex-row "
      >
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>

        <div tw="flex min-w-[23rem] max-w-[23rem]">
          <Label text="문서이름" custom={tw`py-3`} />
          <Icon icon="fi-rr-caret-up" custom={tw`py-2`} />
        </div>
        <div className="DocsStatus" tw="flex  grid grid-cols-3 mr-auto my-auto">
          <div tw="min-w-[10rem] max-w-[10rem] ml-6   px-4 ">{docsTarget}</div>
          <div tw="min-w-[10rem] max-w-[10rem]  px-4">
            문서공유일 <Icon icon="fi-rr-caret-up" />
          </div>
          <div tw="min-w-[10rem] max-w-[10rem]  px-4">
            문서마감일 <Icon icon="fi-rr-caret-up" />
          </div>
          {/* <div tw=" px-4 py-2.5">삭제</div> */}
        </div>
      </div>
    </div>
  );
};

export default DocsListHeader;
