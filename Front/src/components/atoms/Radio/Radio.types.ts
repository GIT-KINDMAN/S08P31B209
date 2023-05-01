import { ChangeEventHandler } from "react";

export interface StyleProps {
  checked?: boolean;
}
export interface InputProps extends StyleProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
