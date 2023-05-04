import { Outlet, redirect } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Home = () => {
  return (
    <>
      <Wrapper tw="flex-row h-screen">
        <Wrapper tw="flex-col w-[16rem]" className="sidebar">
          <Wrapper tw="flex-col grow-0" className="sidebarHeader">
            <Wrapper tw="grow-0 h-[4rem]" className="LogoRedirect">
              LogoRedirect
            </Wrapper>
            <Wrapper tw="grow-0 h-[6rem]" className="MemberProfileOverview">
              MemberProfileOverview
            </Wrapper>
          </Wrapper>
          <Wrapper tw="grow" className="sidebarContent">
            content
          </Wrapper>
          <Wrapper tw="flex-col grow-0" className="sidebarFooter">
            <Wrapper tw="grow-0 h-[8rem]" className="SettingArea">
              Setting
            </Wrapper>
            <Wrapper tw="grow-0 h-[8rem]" className="footerArea">
              여기 대충 연락처나 저작권 정보 들어감
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper tw="w-full" className="content">
          <Outlet />
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Home;
