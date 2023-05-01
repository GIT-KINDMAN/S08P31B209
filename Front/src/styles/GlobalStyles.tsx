import { createGlobalStyle } from "styled-components";
import tw, { theme, styled, GlobalStyles as BaseStyles } from "twin.macro";

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
