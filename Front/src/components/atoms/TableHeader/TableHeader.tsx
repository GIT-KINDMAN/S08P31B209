import StyledTableHeader from "./TableHeader.styles";
import { InputProps } from "./TableHeader.types";

import tw, { css, styled, theme } from "twin.macro";

const TableHeader = ({ label }: InputProps) => {
  return (
    <StyledTableHeader>
      <span tw="text-base font-bold align-middle ml-12">{label}</span>
    </StyledTableHeader>
  );
};
export default TableHeader;
