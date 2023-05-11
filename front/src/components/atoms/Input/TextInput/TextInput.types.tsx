import { size } from "@/constants";

import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { CSSProp } from "styled-components";
import { TwStyle } from "twin.macro";

export interface SProps {
  fontSize?: size;
  variant?: "primary" | "secondary" | "error" | "disabled" | "none";
  custom?: TwStyle | CSSProp;
}

export interface IProps extends SProps {
  id?: string;
  className?: string;

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

  value?: string;
  placeholder?: string;

  isDisabled?: boolean;
  isHidden?: boolean;

  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyup?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
