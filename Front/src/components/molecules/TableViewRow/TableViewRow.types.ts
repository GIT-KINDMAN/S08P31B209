import { size } from "@/constants";

import { TwStyle } from "twin.macro";

export interface InputProps {
  icon?: string;
  iconColor?: TwStyle;
  checked?: boolean;
  size?: size;
  labels?: string[];
  isAsc?: boolean;
  isBookmarkActive: boolean;
  onClick?: () => void;
}
