import { Icon, Label } from "@/components/atoms";

import tw from "twin.macro";

const DocsListHeader = () => {
  return (
    <div className="FileBox" tw="border-2 min-w-[64rem] flex flex-col">
      <div
        className="FileBoxHeader"
        tw="min-h-[3rem] max-h-[3rem] flex flex-row "
      >
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>

        <div tw="flex min-w-[21rem] max-w-[21rem]">
          <Label text="문서이름" custom={tw`py-3`} />
          <Icon icon="fi-rr-caret-up" />
        </div>
        <div className="DocsStatus" tw="flex ml-auto my-auto">
          <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4 ">
            문서수정일 <Icon icon="fi-rr-caret-up" />
            {/* <Icon icon="fi-rr-caret-down" /> */}
          </div>
          <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4">
            문서공유일 <Icon icon="fi-rr-caret-up" />
          </div>
          <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4">
            문서마감일 <Icon icon="fi-rr-caret-up" />
          </div>
          <div tw="mx-4 px-4 py-2.5">삭제</div>
        </div>
      </div>
    </div>
  );
};

export default DocsListHeader;
