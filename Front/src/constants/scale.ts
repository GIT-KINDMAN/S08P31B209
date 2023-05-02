import tw from "twin.macro";

export type size =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export const getSize = {
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  md: tw`text-base`,
  lg: tw`text-lg`,
  xl: tw`text-xl`,
  "2xl": tw`text-2xl`,
  "3xl": tw`text-3xl`,
  "4xl": tw`text-4xl`,
  "5xl": tw`text-5xl`,
  "6xl": tw`text-6xl`,
  "7xl": tw`text-7xl`,
  "8xl": tw`text-8xl`,
  "9xl": tw`text-9xl`,
};
