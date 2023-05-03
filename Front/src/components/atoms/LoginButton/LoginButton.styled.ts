import { StyleProps } from "./LoginButton.types";

import tw, { css, styled } from "twin.macro";

export const StyledLoginButton = styled.button(({ text }: StyleProps) => [
  tw`rounded mb-6 `,

  // The common button styles added with the tw import
  text === "로그인" && tw`bg-blue-600 text-white`,

  text === "비밀번호 재설정" && tw`bg-blue-600 text-white`,

  text === "확인하고 로그인 하기" && tw`bg-blue-600 text-white`,

  text === "회원가입" && tw`bg-white text-blue-600 border-blue-600 border-2`,

  tw`w-80 py-2 rounded transform duration-75`,
]);
