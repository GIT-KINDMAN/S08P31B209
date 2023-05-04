import { CheckBox, Icon, TextBox } from "@/components/atoms";

import { InputProps } from "./TableViewRow.types";

import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`flex w-fit p-2`);
let iconColor = tw`text-lightgray-400`;
export const TableViewRow = ({
  icon = "document",
  checked,
  isBookmarkActive,
  size,
  labels,
  isAsc,
  onClick,
}: InputProps) => {
  if (icon === "picture") {
    iconColor = tw`text-orange-400`;
  } else if (icon === "folder") {
    iconColor = tw`text-blue-500`;
  }
  return (
    <div tw="pl-4 h-10 flex items-center">
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
        <Icon
          icon={icon}
          size={size}
          iconType={icon === "picture" ? "br" : "sr"}
          iconColor={iconColor}
        />
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

export default TableViewRow;
