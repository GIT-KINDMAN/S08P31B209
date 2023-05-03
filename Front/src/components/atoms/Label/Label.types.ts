import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface StyleProps {
  /**
   * label 사이즈 지정. text-size 기반
   */
  size?: size;

  /**
   * label 색상 지정
   */
  labelColor?: TwStyle | CSSProp;

  /**
   * label 배경 색상 지정
   */
  bgColor?: TwStyle | CSSProp;

  /**
   * label Bold
   */
  isBold?: boolean;

  /**
   * label Style
   */
  fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";
}

export interface InputProps extends StyleProps {
  /**
   * label 명칭
   */
  text?: string;
  onclick?: () => void;
}
