export interface StyleProps {
  variant?:
    | "primary"
    | "secondary"
    | "intronav"
    | "previous"
    | "next"
    | "editorcreate";
  config?: "fill" | "outline";
  size?: "large" | "medium" | "small";
}

export interface InputProps extends StyleProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
}
