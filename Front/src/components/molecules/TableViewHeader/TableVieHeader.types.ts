import { size } from "@/constants";

export interface InputProps {
  checked?: boolean;
  size?: size;
  labels?: string[];
  isAsc?: boolean;
  isBookmarkActive: boolean;
  onClick?: () => void;
}
