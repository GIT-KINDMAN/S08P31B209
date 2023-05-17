import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, css, styled } from "twin.macro";

const html = styled.html(() => [tw`h-full`]);

const CustomStyles = createGlobalStyle({
  html: html,
  body: {
    ...tw`antialiased`,
  },
  "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "input[type=number]": {
    "-moz-appearance": "textfield",
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
