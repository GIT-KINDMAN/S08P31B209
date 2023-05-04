import { styleProps } from "./MainTitle.types";

import tw, { styled } from "twin.macro";

export const Title = styled.div(({ type }: styleProps) => [
  tw`my-20 ml-10`,
  type === "main" &&
    tw`font-bold text-5xl text-[#2e6888] 
  lg:text-5xl 
  md:text-4xl 
  sm:text-2xl
  xs:text-xl
  `,

  type === "fixed" && tw` top-40 right-60 font-bold text-4xl text-black `,

  // type === "sub" &&
  //   currentSlide ===  &&
  //   tw`top-40 right-40 font-bold text-3xl text-[#DA2200]`,
  // type === "sub" &&
  //   currentSlide ===  &&
  //   tw`top-60 right-60 font-bold text-3xl text-[#FF5B4E]`,
]);
