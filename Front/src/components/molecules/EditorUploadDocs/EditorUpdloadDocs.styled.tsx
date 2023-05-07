import { styleProps } from "./EditorUploadDocs.types";

import tw, { styled } from "twin.macro";

export const UploadDocs = styled.div`
  width: 672px;
  border: solid 2px #657077;
  color: black;
  text-align: start;
  border-radius: 4px;
`;

export const UploadBox = styled.div(({ upload }: styleProps) => [
  tw`border-2 border-dashed text-center mx-14 mb-4 py-14 rounded-2xl bg-[#CFDAE2] text-[#657077]`,
]);
