import { Icon } from "@/components/atoms";

import StyledTextBox from "./TextBox.styled";
import { InputProps } from "./TextBox.types";

import "twin.macro";

export const TextBox = ({ size, label, isAsc, onClick }: InputProps) => {
  return (
    <div tw="flex space-x-1 p-1">
      <StyledTextBox size={size} onClick={onClick}>
        {label}
      </StyledTextBox>
      {isAsc === undefined ? (
        <Icon
          size={size}
          icon={isAsc ? "fi-rr-caret-up" : "fi-rr-caret-down"}
          tw="cursor-pointer"
        ></Icon>
      ) : (
        <Icon size={size} icon={isAsc ? "caret-up" : "caret-down"}></Icon>
      )}
    </div>
  );
};
export default TextBox;
