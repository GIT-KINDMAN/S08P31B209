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

export const getFontSize = {
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

export const getSize = {
  xs: tw`text-[1rem]`,
  sm: tw`text-[1.25rem]`,
  md: tw`text-[1.5rem]`,
  lg: tw`text-[1.75rem]`,
  xl: tw`text-[1.75rem]`,
  "2xl": tw`text-[2rem]`,
  "3xl": tw`text-[2.25rem]`,
  "4xl": tw`text-[2.5rem]`,
  "5xl": tw`text-[3rem]`,
  "6xl": tw`text-[3.75rem]`,
  "7xl": tw`text-[4.5rem]`,
  "8xl": tw`text-[6rem]`,
  "9xl": tw`text-[8rem]`,
};
