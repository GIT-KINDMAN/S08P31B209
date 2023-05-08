import StyledBoxSidebar from "./boxSidebar.styled";
import { InputProps } from "./boxSidebar.types";

import "twin.macro";

const Sample = ({ variable }: InputProps) => {
  return (
    <>
      <StyledBoxSidebar>
        <div id="sidebarHeader">header</div>
        <div id="sidebarProfileOverview">profile</div>
        <div id="sidebarCatalogInfo">catalog</div>
        <div id="sidebarFooter">footer</div>
      </StyledBoxSidebar>
    </>
  );
};
export default Sample;
