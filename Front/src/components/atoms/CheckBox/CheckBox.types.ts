import { size } from "@/constants";

export interface StyleProps {
  checked?: boolean;
  size?: size;
}
export interface InputProps extends StyleProps {
  icon?: string;
  onChange?: () => void;
}
