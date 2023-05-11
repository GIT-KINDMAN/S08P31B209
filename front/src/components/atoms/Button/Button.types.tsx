import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  fontSize?: size;
  isBold?: boolean;
  isOutline?: boolean;
  variant?: "primary" | "secondary" | "disabled" | "none";
  custom?: TwStyle | CSSProp;
}

export interface IProps extends SProps {
  id?: string;
  className?: string;

  children?: string | React.ReactNode;

  // type?: "submit" | "button";

  isDisabled?: boolean;
  isHidden?: boolean;

  onClick?: () => void;
}
