import { CheckBox, Icon, TextBox } from "@/components/atoms";

import { InputProps } from "./TableVieHeader.types";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`flex w-fit p-2`);

export const TableViewHeader = ({
  checked,
  isBookmarkActive,
  size,
  labels,
  isAsc,
  onClick,
}: InputProps) => {
  return (
    <div tw="pl-4 h-12 w-[80rem] flex items-center border-b-2">
      <Wrapper>
        <CheckBox checked={checked} icon="check" onClick={onClick} />
      </Wrapper>
      <Wrapper tw="justify-center">
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
      </Wrapper>
      <Wrapper tw="justify-center">
        <Icon iconColor={tw`text-white`} />
      </Wrapper>
      <Wrapper tw="w-80 ">
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[0] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[1] : undefined}
          onClick={onClick}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[2] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[3] : undefined}
          isAsc={isAsc}
          onClick={onClick}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[4] : undefined}
          onClick={onClick}
        />
      </Wrapper>
    </div>
  );
};

export default TableViewHeader;
