import { getSize } from "@/constants";

import { StyleProps } from "./TextBox.types";

import tw, { css, styled, theme } from "twin.macro";

export const StyledTextBox = styled.div((props: StyleProps) => [
  tw`text-darkgray-700 w-fit `,
  getSize[props.size ?? "md"],
]);

export default StyledTextBox;
