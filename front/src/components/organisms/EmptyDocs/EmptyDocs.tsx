import { Icon } from "@/components/atoms";

import "twin.macro";

const EmptyDocs = () => {
  return (
    <>
      <div tw="flex flex-col justify-center items-center mt-[10rem]">
        <Icon icon="broom" iconType="rr" size="5xl"></Icon>
        <div tw="text-3xl m-1">문서함이 비어있어요</div>
      </div>
    </>
  );
};

export default EmptyDocs;
