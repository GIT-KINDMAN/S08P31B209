import { Icon } from "@/components/atoms";

import tw from "twin.macro";

const PathSideToolBar = () => {
  return (
    <>
      <div tw="flex space-x-2">
        <Icon
          iconColor={tw`text-lightgray-600`}
          size="lg"
          iconType="rr"
          icon="folder"
        ></Icon>

        <Icon
          iconColor={tw`text-lightgray-600`}
          size="lg"
          iconType="rr"
          icon="file
          "
        ></Icon>
        <div tw="text-lightgray-600 text-sm leading-6">|</div>
        <Icon
          iconColor={tw`text-lightgray-600`}
          size="lg"
          iconType="rr"
          icon="download"
        ></Icon>
        <div tw="text-lightgray-600 text-sm leading-6">|</div>
        <Icon
          iconColor={tw`text-lightgray-600`}
          size="lg"
          iconType="rr"
          icon="redo"
        ></Icon>
        <Icon
          iconColor={tw`text-lightgray-600`}
          size="lg"
          iconType="rr"
          icon="trash"
        ></Icon>
      </div>
    </>
  );
};
export default PathSideToolBar;
