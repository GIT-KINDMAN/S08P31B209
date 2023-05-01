export interface StyleProps {
  checked?: boolean;
}
export interface InputProps extends StyleProps {
  icon?: string;
  onChange: () => void;
}
