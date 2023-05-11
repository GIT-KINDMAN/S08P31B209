import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  custom?: TwStyle | CSSProp;
}

export interface IProps extends SProps {
  id?: string;
  className?: string;

  imageUrl?: string;

  isDisabled?: boolean;
  isHidden?: boolean;

  onClick?: () => void;
}
