import { size } from "@/constants";

import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface StyleProps {
  /**
   * input 글씨 사이즈 지정. text-size 기반
   */
  fontSize?: size;

  /**
   * input variant 지정
   */
  variant?: "primary" | "secondary" | "error" | "disabled" | "none";

  /**
   * input Custom
   */
  custom?: TwStyle | CSSProp;
}

export interface InputProps extends StyleProps {
  /**
   * input 식별을 위한 id
   */
  id?: string;

  /**
   * input 입력 타입. text Input 타입만 허용
   */
  type?:
    | "number"
    | "search"
    | "text"
    | "email"
    | "password"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime"
    | "datetime-local"
    | "tel"
    | "url";

  /**
   * input 입력 값
   */
  value?: string;

  /**
   * input 플레이스 홀더
   */
  placeholder?: string;

  /**
   * input Disabled
   */
  isDisabled?: boolean;

  /**
   * input event
   */
  onclick?: () => void;
  onchange?: () => void;
  oninput?: () => void;
  onfocus?: () => void;
  onblur?: () => void;
  onkeyup?: () => void;
}
