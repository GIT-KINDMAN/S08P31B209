import tw, { css, styled, theme } from "twin.macro";
import { StyleProps } from "./TextArea.types";

const StyledTextArea = styled.input(({ variant }: StyleProps) => [
  tw`w-40 bg-white`,
  css`
    border: 1px solid black;
  `,
  variant === "text" &&
    tw`w-80 h-10 border-2 border-[#ABB6BE] rounded-lg mx-auto px-4 flex`,
  variant === "password" &&
    tw`w-80 h-10 border-2 border-[#ABB6BE] rounded-lg mx-auto px-4 flex`,
  variant === "edit" && tw`w-40 h-7 px-2 mx-auto`,
]);

export default StyledTextArea;
