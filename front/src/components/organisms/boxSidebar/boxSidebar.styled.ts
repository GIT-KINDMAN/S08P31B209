import { StyleProps } from "./boxSidebar.types";

import tw, { styled } from "twin.macro";

export const StyledBoxSidebar = styled.div(({ variable }: StyleProps) => [
  tw`flex flex-col`,
  variable && tw`flex flex-col`,
]);

export default StyledBoxSidebar;
