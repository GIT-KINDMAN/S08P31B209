import { styleProps } from "./Step.types";

import tw, { styled } from "twin.macro";

export const StepWord = styled.div(({ active }: styleProps) => [
  tw`text-black mx-2`,
  active === true && tw`text-orange-600 font-bold`,
]);
