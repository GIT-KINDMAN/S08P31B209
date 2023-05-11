import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  size?: size;
  custom?: TwStyle | CSSProp;
}

export interface IProps extends SProps {
  id?: string;
  className?: string;

  icon?: string;

  isDisabled?: boolean;
  isHidden?: boolean;

  onClick?: () => void;
}
