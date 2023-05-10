import { StyledProps } from "./TableHeader.types";

import tw, { css, styled } from "twin.macro";

export const StyledTableHeader = styled.div(
  ({ width = "80rem", height = "5rem" }: StyledProps) => css`
    width: ${width};
    height: ${height};
    ${tw`flex items-center`}
  `,
);

export default StyledTableHeader;
