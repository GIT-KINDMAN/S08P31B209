import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  fontSize?: size;
  isBold?: boolean;
  custom?: TwStyle | CSSProp;
}

export interface IProps extends SProps {
  id?: string;
  className?: string;

  text?: string;

  isDisabled?: boolean;
  isHidden?: boolean;

  onClick?: () => void;
}
