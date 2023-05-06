import { size } from "@/constants";

export interface StyledProps {
  width?: any;
  height?: any;
}

export interface InputProps extends StyledProps {
  label?: string;
  size?: size;
}
