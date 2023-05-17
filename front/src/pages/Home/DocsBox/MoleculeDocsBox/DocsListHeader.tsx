import { Label } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
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

  return (
    <div className="FileBox" tw="min-w-[60rem] max-w-[60rem] flex flex-col">
      <div
        className="FileBoxHeader"
        tw="min-h-[3rem] max-h-[3rem] flex flex-row  font-bold"
      >
        <div tw="flex min-w-[21rem] max-w-[25rem]">
          <Label text="문서이름" custom={tw`text-lg py-3`} />
        </div>
        <div className="DocsStatus" tw="flex  mr-auto my-auto text-lg">
          <div tw="min-w-[8rem] max-w-[8rem] ">{docsTarget}</div>
          <div tw="min-w-[10rem] max-w-[10rem]  px-4">문서공유일</div>
          <div tw="min-w-[10rem] max-w-[10rem]  px-4">문서마감일</div>
        </div>
      </div>
    </div>
  );
};

export default DocsListHeader;
