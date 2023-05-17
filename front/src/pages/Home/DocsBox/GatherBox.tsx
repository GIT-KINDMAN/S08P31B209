import { Icon } from "@/components/atoms";

import DocsHeader from "./MoleculeDocsBox/DocsHeader";
import DocsListHeader from "./MoleculeDocsBox/DocsListHeader";

// import
import tw from "twin.macro";

const GatherBox = () => {
  return (
    <div tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white">
      <DocsHeader header="문서 제출 현황" />
      <DocsListHeader />
      <div
        className="FileItem"
        tw="flex flex-col border-2 min-w-[40rem] max-w-[60rem] "
      >
        <div className="DocsReceiver" tw="flex my-auto items-center">
          <div className="DocsStatus" tw="min-w-[2rem] max-w-[2rem]  mx-8 my-3">
            <span>상태</span>
          </div>
          <div
            className="DocsIdx"
            tw="min-w-[4rem] max-w-[4rem]  my-3  text-center "
          >
            1
          </div>
          <div
            className="DocsReceiverName"
            tw="min-w-[8rem] max-w-[rem] my-3 text-center "
          >
            <span> 홍길동</span>
            {/* {item.createdDate.slice(11, 16)} */}
          </div>
          <div
            className="DocsEmail"
            tw="min-w-[18rem] max-w-[18rem]   my-3 text-center"
          >
            gildong@naver.com
          </div>
          <div
            className="DocsReceiverPhone"
            tw="min-w-[12rem] max-w-[12rem] my-3 text-center"
          >
            010-1234-5678
          </div>
          <div
            className="DocsDelete"
            tw="min-w-[12rem] max-w-[12rem] my-3 text-center"
          >
            <Icon
              icon=" fi-rr-trash"
              custom={tw` hover:scale-90 hover:text-orange-400 `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatherBox;
