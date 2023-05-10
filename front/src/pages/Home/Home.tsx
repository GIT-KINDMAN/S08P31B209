// import { Sidebar } from "@atomic/organisms";
import { Outlet, redirect } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Home = () => {
  return (
    <>
      <Wrapper tw="flex-row h-screen">
        {/* <Sidebar /> */}
        <Wrapper tw="w-full" className="content">
          <Outlet />
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Home;
