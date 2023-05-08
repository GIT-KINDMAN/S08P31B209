import { CheckBox, Icon, TextBox } from "@/components/atoms";

import { InputProps } from "./TableVieHeader.types";

import tw, { styled } from "twin.macro";

const Swrapper = styled.div(tw`flex w-fit p-2`);

export const TableViewHeader = ({
  checked,
  isBookmarkActive,
  size,
  labels,
  isAsc,
  onClick,
}: InputProps) => {
  return (
    <div tw="flex w-[73.2rem] pl-4 h-12 items-center border-b-2">
      <Swrapper>
        <CheckBox checked={checked} icon="check" onClick={onClick} />
      </Swrapper>
      <Swrapper tw="justify-center">
        {isBookmarkActive ? (
          <Icon
            icon="star"
            size={size}
            iconType="sr"
            iconColor={tw`text-orange-400`}
          />
        ) : (
          <Icon
            icon="star"
            size={size}
            iconType="sr"
            iconColor={tw`text-lightgray-400`}
          />
        )}
      </Swrapper>
      <Swrapper tw="justify-center">
        <Icon iconColor={tw`text-white`} />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[0] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[1] : undefined}
          onClick={onClick}
        />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[2] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[3] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[4] : undefined}
          onClick={onClick}
        />
      </Swrapper>
      <Swrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[5] : undefined}
          onClick={onClick}
        />
      </Swrapper>
    </div>
  );
};

export default TableViewHeader;
