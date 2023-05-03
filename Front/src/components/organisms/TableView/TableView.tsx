import { CheckBox, Icon, TextBox } from "@/components/atoms";

import { InputProps } from "./TableView.types";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`flex w-fit p-2`);

export const TableView = ({
  height,
  width,
  checked,
  isBookmarkActive,
  size,
  labels,
  isAsc,
  onChange,
}: InputProps) => {
  return (
    <div tw="pl-4 h-12 flex items-center h-fit">
      <Wrapper>
        <CheckBox checked={checked} icon="check" onChange={onChange} />
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
      <Wrapper tw="w-80 ">
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[0] : undefined}
          isAsc={isAsc}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[1] : undefined}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[2] : undefined}
          isAsc={isAsc}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[3] : undefined}
          isAsc={isAsc}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <TextBox
          size={size}
          label={labels && labels.length > 0 ? labels[4] : undefined}
          onChange={onChange}
        />
      </Wrapper>
    </div>
  );
};

export default TableView;
