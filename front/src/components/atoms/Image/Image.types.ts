import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface StyleProps {
  /**
   * image Custom
   */
  custom?: TwStyle | CSSProp;
}

export interface InputProps extends StyleProps {
  /**
   * image Path
   */
  imageUrl?: string;

  /**
   * image onclick event
   */
  onclick?: () => void;
}
