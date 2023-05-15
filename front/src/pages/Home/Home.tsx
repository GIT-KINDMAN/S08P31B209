import { setAuth } from "@store/slice/authSlice";
import type { RootState } from "@store/store";

import { fetchUserInfo, logout } from "@/apis/memberAPI";
import Logo from "@/assets/DocDoc-white.png";
import ThumbnailDump from "@/assets/react.svg";

import { UserProps } from "./Setting/Setting";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const footerCopyRight = "© 2023-2023. ssafy B209. All rights reserved";
const footerCSInfo = "문의: support @ssafy.com";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const token = authState.authToken;
  const [userData, setUserData] = useState<UserProps | null>(null);
  useEffect(() => {
    // console.log(authState);
    if (authState.authToken) {
      const token = authState.authToken;

      fetchUserInfo({
        headers: { Authorization: "Bearer " + token },
      })
        .then((request) => {
          // console.log(request);
          setUserData(request.data.value);
          console.log(request.data.value);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authState.authToken]);

  return (
    <>
      <div>
        <div tw="flex flex-row ">
          <div
            className="HomeSidebar"
            tw="flex flex-col justify-between min-w-[16rem] max-w-[16rem] min-h-screen max-h-fit bg-blue-900"
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
                    src={ThumbnailDump}
                    tw="m-2 w-[2.5rem] h-[2.5rem] border rounded-[50%] border-white"
                  />
                </div>
                <div tw="flex flex-col text-white">
                  <label className="UserName" tw="text-lg">
                    {userData?.name}
                  </label>
                  <label className="UserState" tw="text-xs">
                    {userData?.email}
                  </label>
                </div>
              </div>
              <div className="CreateTemplate" tw="flex px-4 pt-2 pb-4">
                <button
                  className="CreateTemplateBtn"
                  tw="p-2 w-full rounded-[0.5rem] bg-orange-600 font-bold"
                  onClick={() => navigate("/editor")}
                >
                  생성하기
                </button>
              </div>
              <div className="CategoryMenu" tw="px-2 py-1 grow text-white">
                <ul
                  className="CategoryMenuList"
                  tw="px-4 pt-2 pb-10 rounded-[0.5rem] bg-blue-800"
                >
                  <li className="CategoryMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/mybox/receive")}
                    >
                      <i
                        className="fi fi-rr-folder"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">받은 문서함</label>
                    </div>
                  </li>
                  <li className="CategoryMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/mybox/send")}
                    >
                      <i
                        className="fi fi-rr-folder"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">보낸 문서함</label>
                    </div>
                  </li>

                  <li className="CategoryMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/address")}
                    >
                      <i
                        className="fi fi-rr-briefcase"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">주소록 관리</label>
                    </div>
                  </li>
                  <li className="CategoryMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/template")}
                    >
                      <i
                        className="fi fi-rr-briefcase"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">템플릿 관리</label>
                    </div>
                  </li>
                  <li className="CategoryMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/trash")}
                    >
                      <i
                        className="fi fi-rr-trash"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">휴지통</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="SettingMenu" tw="px-4 py-2 text-white">
                <ul className="SettingMenuList">
                  <li className="SettingMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/home/setting")}
                    >
                      <i
                        className="fi fi-sr-settings"
                        tw="pr-1 cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">설정</label>
                    </div>
                  </li>
                  <li className="SettingMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => navigate("/notice")}
                    >
                      <i
                        className="fi fi-sr-settings"
                        tw="pr-1 hidden cursor-pointer"
                      ></i>
                      <label tw="cursor-pointer">공지사항</label>
                    </div>
                  </li>
                  <li className="SettingMenuListItem">
                    <div
                      tw="w-fit pt-1 pb-2 hocus:(text-orange-600) cursor-pointer"
                      onClick={() => {
                        if (token) {
                          console.log(token);

                          logout(token)
                            .then((request) => {
                              console.log("logout:", request.data);
                              dispatch(setAuth(null));
                            })
                            .then(() => navigate("/auth"))
                            .catch((e) => console.log(e));
                        }
                      }}
                    >
                      <i
                        className="fi fi-sr-settings"
                        tw="pr-1 hidden cursor-pointer"
                      ></i>
                      <label tw="font-bold text-red-600 cursor-pointer">
                        로그아웃
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="SideFooter"
              tw="flex flex-col justify-around min-h-[8rem] bg-lightgray-900"
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
          <div
            className="ContentWrap"
            tw="flex w-full min-w-[40rem] justify-center bg-white"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
