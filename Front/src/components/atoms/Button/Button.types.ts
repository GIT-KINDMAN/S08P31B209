export interface StyleProps {
  variant?: "primary" | "secondary";
  config?: "fill" | "outline";
  size?: "large" | "medium" | "small";
}

export interface InputProps extends StyleProps {
  label?: string;
  icon?: string;
}
