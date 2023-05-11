import { SProps } from "./Wrapper.types";

import tw, { styled } from "twin.macro";

export const SWrapper = styled.div((props: SProps) => [
  tw`flex flex-col`,
  tw`w-full h-fit`,
  tw`mx-1 my-2 mb-4 px-2 py-2`,
  tw`border-2 border-lightgray-600`,
  tw`rounded-[0.5rem]`,

  props.custom,
]);

export default SWrapper;
