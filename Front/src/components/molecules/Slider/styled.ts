import tw, { styled } from "twin.macro";

export const Container = styled.div(() => [tw`w-96 overflow-hidden ml-20`]);

const Button = styled.button`
  all: unset;
  height: 30px;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: auto;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

export const SliderContainer = styled.div(() => [tw`w-full flex`]);

export { Button };
