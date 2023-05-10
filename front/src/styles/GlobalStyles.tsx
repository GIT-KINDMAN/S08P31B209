import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, styled } from "twin.macro";

const html = styled.html(() => [tw`h-full`]);

const CustomStyles = createGlobalStyle({
  html: html,
  body: {
    ...tw`antialiased`,
  },
});

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
