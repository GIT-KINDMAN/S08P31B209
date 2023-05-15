import type { RootState } from "@store/store";

import { fetchUserInfo } from "@/apis/memberAPI";

import AccountWrap from "./MoleculeSetting/AccountWrap";
import SettingHeader from "./MoleculeSetting/SettingHeader";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "twin.macro";

export interface UserProps {
  email?: string;
  name?: string;
  birth?: string;
  gender?: string;
  phone?: string;
  address?: string;
  group?: string;
  position?: string;
}

const Setting = () => {
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserProps | null>(null);

  useEffect(() => {
    // console.log(authState);
    if (authState.authToken) {
      const token = authState.authToken;
      console.log(token);
      console.log(typeof token);
      fetchUserInfo({
        headers: { Authorization: "Bearer " + token },
      })
        .then((response) => {
          setUserData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authState.authToken]);

  return (
    <>
      <div
        className="SettingForm"
        tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
      >
        <SettingHeader />
        <div className="Content">
          {userData && (
            <AccountWrap
              email={userData?.email}
              name={userData?.name}
              birth={userData?.birth}
              gender={userData?.gender}
              phone={userData?.phone}
              address={userData?.address}
              group={userData?.group}
              position={userData?.position}
            />
          )}

          <div
            className="AccountController"
            tw="flex mb-2 p-4 rounded-lg shadow-md"
          >
            <div className="Title" tw="text-xl font-bold">
              <label>계정 설정</label>
            </div>
            <div className="Detail" tw="flex flex-col ml-8 pl-4 border-l-2">
              <ul className="DetailList">
                <li className="DetailListItem" tw="flex pt-1 pb-3">
                  <div
                    tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 border-orange-600) rounded-lg cursor-pointer"
                    onClick={() => navigate("/home/setting/change")}
                  >
                    <label tw="font-bold cursor-pointer">정보 수정</label>
                  </div>
                </li>
                <li className="DetailListItem" tw="flex pt-1 pb-3">
                  <div
                    tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 border-orange-600) rounded-lg cursor-pointer"
                    onClick={() => navigate("/member/password")}
                  >
                    <label tw="font-bold cursor-pointer">비밀번호 변경</label>
                  </div>
                </li>
                <li className="DetailListItem" tw="flex pt-1 pb-3">
                  <div
                    tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 bg-red-200) rounded-lg cursor-pointer"
                    onClick={() => navigate("/member/leave")}
                  >
                    <label tw="font-bold text-red-600 cursor-pointer">
                      계정 탈퇴
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
