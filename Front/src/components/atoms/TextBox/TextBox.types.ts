import { size } from "@/constants";

export interface StyleProps {
  size?: size;
}
export interface InputProps extends StyleProps {
  label?: string;
  isAsc?: boolean;
  onChange: () => void;
}
