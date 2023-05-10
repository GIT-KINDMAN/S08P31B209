import { getFontSize } from "@/constants";

import StyledTableHeader from "./TableHeader.styles";
import { InputProps } from "./TableHeader.types";

import "twin.macro";

const TableHeader = ({ width, height, label, size = "md" }: InputProps) => {
  const fontSize = getFontSize[size];
  return (
    <StyledTableHeader width={width} height={height}>
      <span tw="text-base font-bold align-middle ml-12 " style={fontSize}>
        {label}
      </span>
    </StyledTableHeader>
  );
};
export default TableHeader;
