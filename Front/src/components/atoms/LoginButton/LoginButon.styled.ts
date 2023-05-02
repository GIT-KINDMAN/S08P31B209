import tw, { styled } from "twin.macro";

export const StyledLoginButton = styled.button(() => [
  tw`bg-blue-600 text-white rounded`,

  // The common button styles added with the tw import
  tw`w-80 py-2 rounded transform duration-75`,
]);
