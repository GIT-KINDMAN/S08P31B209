export interface StyleProps {
  width?: number;
  height?: number;
  unit?: string;
}

export interface InputProps extends StyleProps {
  imageUrl?: string | undefined;
}
