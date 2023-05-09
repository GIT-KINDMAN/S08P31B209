import Logo from "@/assets/DocDoc-white.png";

import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const footerCopyRight = "© 2023-2023. ssafy B209. All rights reserved";
const footerCSInfo = "문의: support @ssafy.com";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div tw="flex flex-row ">
          <div
            className="HomeSidebar"
            tw="flex flex-col justify-between max-w-[16rem] min-h-screen bg-blue-900"
          >
            <div className="SideHeader">
              <div
                className="LogoWarp"
                tw="flex items-center justify-center h-[4rem] cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img src={Logo} tw="w-[80%]" />
              </div>
            </div>
            <div
              className="SideContent"
              tw="flex flex-col justify-between grow"
            >
              <div
                className="ProfileView"
                tw="flex items-center px-4 pt-2 pb-4"
              >
                <div className="UserThumbnail">
                  <img
                    src={"src/assets/react.svg"}
                    tw="m-2 w-[2.5rem] h-[2.5rem] border rounded-[50%] border-white"
                  />
                </div>
                <div tw="flex flex-col text-white">
                  <label className="UserName" tw="text-lg">
                    User01
                  </label>
                  <label className="UserState" tw="text-xs">
                    대충 알림이나 기타 등등
                  </label>
                </div>
              </div>
              <div className="ProfileView" tw="flex px-4 pt-2 pb-4">
                <button
                  className="LoginBtn"
                  tw="p-2 w-full rounded-[0.5rem] bg-orange-600 font-bold"
                  onClick={() => navigate("/editor")}
                >
                  생성하기
                </button>
              </div>
              <div className="CategoryMenu" tw="grow bg-blue-800">
                CategoryMenu
              </div>
              <div className="SettingMenu" tw="">
                SettingMenu
              </div>
            </div>
            <div
              className="SideFooter"
              tw="flex flex-col justify-around min-h-[8rem]"
            >
              <label tw="text-xs text-white pl-4">{footerCSInfo}</label>
              <div
                className="FooterNav"
                tw="flex flex-row text-xs text-white pl-4"
              >
                <label
                  className="FooterNavItem"
                  tw="text-xs text-white cursor-pointer"
                  onClick={() => navigate("/policy/service")}
                >
                  이용약관
                </label>
                <div className="NavSep" tw="w-[1px] h-full mx-2 bg-white" />
                <label
                  className="FooterNavItem"
                  tw="text-xs text-white cursor-pointer"
                  onClick={() => navigate("/policy/privacy")}
                >
                  개인정보처리방침
                </label>
                <div className="NavSep" tw="w-[1px] h-full mx-2 bg-white" />
                <label
                  className="FooterNavItem"
                  tw="text-xs text-white cursor-pointer"
                  onClick={() => navigate("/help")}
                >
                  고객센터
                </label>
              </div>
              <label tw="text-xs text-white pl-4">{footerCopyRight}</label>
            </div>
          </div>
          <div className="ContentWrap" tw="flex w-full justify-center">
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
