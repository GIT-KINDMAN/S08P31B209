import { size } from "@/constants";

export interface InputProps {
  height?: stirng;
  width?: string;
  checked?: boolean;
  size?: size;
  labels?: string[];
  isAsc?: boolean;
  isBookmarkActive: boolean;
  onChange?: () => void;
}
