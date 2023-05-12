import { Icon, Label } from "@/components/atoms";

import tw from "twin.macro";

const DocsListHeader = () => {
  return (
    <div
      className="FileBox"
      tw="border-2 min-w-[60rem] max-w-[60rem] flex flex-col"
    >
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
          <div tw="min-w-[10rem] max-w-[10rem]   px-4 ">
            {/* <Icon icon="fi-rr-caret-down" /> */}
            문서수정일 <Icon icon="fi-rr-caret-up" />
          </div>
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
