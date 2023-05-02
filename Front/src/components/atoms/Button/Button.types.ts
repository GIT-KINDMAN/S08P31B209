export interface StyleProps {
  variant?: "primary" | "secondary" | "mainnav";
  config?: "fill" | "outline";
  size?: "large" | "medium" | "small";
}

export interface InputProps extends StyleProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
}
