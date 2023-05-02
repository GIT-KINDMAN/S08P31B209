import { StyleProps } from "./CheckBox.types";

import tw, { css, styled, theme } from "twin.macro";

export const StyledCheckBox = styled.div(({ checked }: StyleProps) => [
  tw`h-5 w-5
  m-1
  rounded-md
  border
  flex-none`,
  checked === true && tw`bg-blue-100`,
  checked === false && [
    css`
      box-shadow: inset 0px 0px 4px rgba (0, 0, 0, 0.1);
    `,
    tw`bg-lightgray-400`,
  ],
]);

export default StyledCheckBox;
