import tw, { styled } from "twin.macro";

export const NavHeader = styled.div`
  width: 100%;
  height: 6%;
  background: #1e5471;
  position: fixed;
  top: 0px;
  z-index: 1;
  display: flex;
  justify-content: end;
  color: white;
`;

export const NavFooter = styled.div`
  width: 100%;
  /* height: 6%; */
  background: #1e5471;
  position: fixed;
  bottom: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  color: white;
`;
