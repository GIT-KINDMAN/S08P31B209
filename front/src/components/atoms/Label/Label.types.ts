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
   * label Bold
   */
  isBold?: boolean;

  /**
   * label Custom
   */
  custom?: TwStyle | CSSProp;
}

export interface InputProps extends StyleProps {
  /**
   * label 명칭
   */
  text?: string;

  /**
   * label onclick event
   */
  onclick?: () => void;
}
