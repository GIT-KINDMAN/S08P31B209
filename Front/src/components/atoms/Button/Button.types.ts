import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface StyleProps {
  /**
   * button 사이즈 지정
   */
  size?: "sm" | "md" | "lg";

  /**
   * button variant 지정
   */
  variant?: "primary" | "secondary" | "disabled" | "none";

  /**
   * button 아웃라인타입 여부
   */
  isOutline?: boolean;

  /**
   * button 글자 색상 지정
   */
  buttonColor?: TwStyle | CSSProp;

  /**
   * button 배경 색상 지정
   */
  bgColor?: TwStyle | CSSProp;

  /**
   * button 포커스 색상 지정
   */
  focusColor?: TwStyle | CSSProp;

  /**
   * icon Custom
   */
  custom?: TwStyle | CSSProp;
}

export interface InputProps extends StyleProps {
  // /**
  //  * 버튼에 포함되는 텍스트 또는 태그
  //  */
  children?: string | React.ReactNode;

  // /**
  //  * button Type
  //  */
  // type?: "submit" | "button";

  /**
   * button Disabled
   */
  isDisabled?: boolean;

  /**
   * button onclick event
   */
  onClick?: () => void;
}
