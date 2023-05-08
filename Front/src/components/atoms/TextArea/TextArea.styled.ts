import { StyleProps } from "./TextArea.types";

import tw, { styled } from "twin.macro";

const StyledTextArea = styled.input(({ variant }: StyleProps) => [
  tw`w-80 h-10 border-[#ABB6BE] border-2 rounded-lg mx-auto outline-none px-4 my-2`,
  // tw`w-80 h-10 border-[#ABB6BE] border-2 rounded-lg mx-auto outline-none px-2 my-2`,
  // css`
  //   border: 2px solid black;
  //   &:focus {
  //     border: 3px solid #6750a4;
  //   }
  // `,

  variant === "email" && tw`border-[#ABB6BE] px-4 `,
  variant === "password" &&
    tw`w-80 h-10 border-2 border-[#ABB6BE] rounded-lg mx-auto px-4 `,
  variant === "edit" && tw`w-40 h-7 px-2 mx-auto`,
  variant === "search" && tw`w-[12rem] border-0`,
]);

export default StyledTextArea;
