import { getSize } from "@/constants";

import { StyleProps } from "./CheckBox.types";

import tw, { css, styled } from "twin.macro";

export const StyledCheckBox = styled.div((props: StyleProps) => [
  tw`h-5 w-5
  m-1
  rounded-md
  flex-none cursor-pointer`,
  props.checked
    ? tw`bg-blue-100`
    : [
        tw`bg-lightgray-400`,
        getSize[props.size ?? "md"],
        css`
          box-shadow: inset 0px 0px 4px rgba (0, 0, 0, 0.1);
        `,
      ],
]);

export default StyledCheckBox;
