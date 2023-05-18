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
        <div className="DocsStatus" tw="flex  mr-auto my-auto text-lg">
          {header === "보낸 문서함" || header === "받은 문서함" ? (
            <div tw="flex">
              <div tw="flex min-w-[21rem] max-w-[25rem]">
                <Label text="문서이름" custom={tw`text-lg py-3`} />
              </div>
              <div tw="flex  mr-auto my-auto text-lg">
                <div tw="min-w-[8rem] max-w-[8rem] ">{docsTarget}</div>
                <div tw="min-w-[10rem] max-w-[10rem]  px-4">문서공유일</div>
                <div tw="min-w-[10rem] max-w-[10rem]  px-4">문서마감일</div>
              </div>
            </div>
          ) : (
            <div tw="flex min-w-[40rem] max-w-[40rem]  mr-auto my-auto text-lg py-4 px-4 ">
              <div tw="min-w-[4rem] max-w-[4rem] mr-4 text-center"> 상태 </div>
              <div tw="min-w-[4rem] max-w-[4rem] text-center"> 번호 </div>
              <div tw="min-w-[6rem] max-w-[6rem] mx-4 text-center"> 이름 </div>
              <div tw="min-w-[18rem] max-w-[18rem] text-center">이메일</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsListHeader;
