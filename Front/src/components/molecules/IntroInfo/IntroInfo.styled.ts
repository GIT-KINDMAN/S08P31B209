import { styleProps } from "./IntroInfo.types";

import tw, { css, styled } from "twin.macro";

export const InfoTitle = styled.div(({ text }: styleProps) => [
  tw`text-black text-4xl pt-40 font-bold `,
  text === "똑똑" && tw`text-[#002D43] text-6xl`,
  css`
    /* line-height: 1.2; */
  `,
]);

export const InfoContent = styled.div(({ currentSlide, check }: styleProps) => [
  tw`text-4xl text-red-700`,
  currentSlide === 0 && check === true && tw`text-5xl text-red-200`,
  currentSlide === 1 && check === true && tw`text-5xl text-red-200`,
  currentSlide === 2 && check === true && tw`text-5xl text-red-200`,
]);

// export const InfoDetail = styled.div(({currentSlide}))
