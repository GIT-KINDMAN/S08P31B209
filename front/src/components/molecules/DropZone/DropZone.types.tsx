import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  /**
   * custom
   */
  custom?: TwStyle | CSSProp;
}

interface IFileTypes {
  id: number;
  object: File;
}

export interface IProps extends SProps {
  // /**
  //  * 버튼에 포함되는 텍스트 또는 태그
  //  */
  // children?: string | React.ReactNode;

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
  // onClick?: () => void;
}
