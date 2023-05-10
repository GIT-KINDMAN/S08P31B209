import { styled } from "twin.macro";

const Nav = styled.div`
  width: 100%;
  height: 4rem;
  background: linear-gradient(to top, #9b9b9b, #002d43);
  position: fixed;
  top: 0px;
  opacity: 0.7;
  z-index: 5;
`;

const Logo = styled.img`
  position: fixed;
  top: 0px;
  z-index: 11;
`;

export { Nav, Logo };
