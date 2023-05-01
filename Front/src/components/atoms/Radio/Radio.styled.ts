import tw, { css, styled, theme } from "twin.macro";
import { StyleProps } from "./Radio.types";

export const StyledRadio = styled.input(({ checked }: StyleProps) => [
  tw`h-2 w-2
  m-1`,
  css`
    appearance: none;
    border-radius: 50%;
    border: 2px solid ${theme`colors.blue.700`};
    outline: none;
  `,
  checked === true &&
    css`
      border-color: ${theme`colors.blue.700`};
      background-color: ${theme`colors.blue.700`};
    `,
]);

export default StyledRadio;
