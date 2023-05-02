import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface StyleProps {
  /**
   * icon 사이즈 지정. text-size 기반
   */
  size?: size;

  /**
   * icon 색상 지정
   */
  iconColor?: TwStyle | CSSProp;
}

export interface InputProps extends StyleProps {
  /**
   * flaticon-uicons 아이콘 이름
   */
  icon?: string;

  /**
   * flaticon-uicons 스타일
   */
  iconType?: "rs" | "rr" | "bs" | "br" | "ss" | "sr" | "ts" | "tr";
}
