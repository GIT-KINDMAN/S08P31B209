import { StyleProps } from "./Button.types";

import tw, { css, styled, theme } from "twin.macro";

export const StyledButton = styled.button(({ variant, size }: StyleProps) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 rounded transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-blue-400)`,

  // Use props to conditionally style your components
  variant === "primary" && tw`bg-black text-white border-black`,

  // Combine regular css with tailwind classes within backticks
  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-blue-600`,
    // IntroNav에 활용
  ],
  // Conditional props can be used
  size === "large" && tw`text-lg`,
  size === "large" && tw`text-sm`,
  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
  variant === "intronav" && [tw`w-28 bg-[#f2921f]`],
  variant === "previous" && tw`font-bold text-black bg-white border-black`,
  variant === "next" && tw`bg-[#f2921f] text-black border-black font-bold`,
  variant === "editorcreate" &&
    tw`w-80 h-20 bg-white text-[#657077] border-2 border-[#657077] font-bold text-xl`,
  variant === "editorcreate" &&
    tw`hocus:(scale-110 text-[#f2921fz] bg-lightgray-200)`,
]);

export default StyledButton;
