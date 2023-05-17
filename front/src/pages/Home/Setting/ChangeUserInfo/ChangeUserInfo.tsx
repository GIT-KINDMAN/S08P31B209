import type { RootState } from "@store/store";

import { fetchUserInfo, updateUserInfo } from "@/apis/memberAPI";
import { Button, Label, TextInput } from "@/components/atoms";

import { UserProps } from "../Setting";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const ChangeUserInfo = () => {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [userPhone, setUserPhone] = useState(userData?.phone);
  const [userAddress, setUserAddress] = useState(userData?.address);
  const [userGroup, setUserGroup] = useState(userData?.group);
  const [userPosition, setUserPosition] = useState(userData?.position);
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);

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
          setUserPhone(request.data.value.phone ?? "");
          setUserAddress(request.data.value.address ?? "");
          setUserGroup(request.data.value.group ?? "");
          setUserPosition(request.data.value.position ?? "");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authState.authToken]);

  // 유저 정보 변경
  const infoUpdate = () => {
    const token = authState.authToken;

    updateUserInfo(
      userPhone ?? "",
      userAddress ?? "",
      userGroup ?? "",
      userPosition ?? "",
      token,
    )
      .then((request) => {
        {
          console.log(request);
          navigate("/home/setting");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div tw="flex flex-col w-full min-w-[40rem] px-6 py-4">
      <label tw="text-3xl">계정 정보 변경</label>
      <hr tw="my-2 min-w-[64rem] max-w-[64rem]  border-t-2 border-blue-600"></hr>
      <div
        className="changeInputWrap"
        tw="flex flex-col min-w-[20rem] max-w-[20rem] mx-auto"
      >
        <div className="InputField" tw="flex flex-col">
          <Label text="연락처" isBold />
          <TextInput
            type="tel"
            placeholder={userPhone}
            custom={tw`border-2 py-1`}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="거주지" isBold />
          <TextInput
            type="text"
            placeholder={userAddress}
            custom={tw`border-2 py-1`}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="소속" isBold />
          <TextInput
            type="text"
            placeholder={userGroup}
            custom={tw`border-2 py-1`}
            onChange={(e) => setUserGroup(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="직책" isBold />
          <TextInput
            type="text"
            placeholder={userPosition}
            custom={tw`border-2 py-1`}
            onChange={(e) => setUserPosition(e.target.value)}
          />
        </div>
      </div>
      <div tw="flex mx-auto my-10">
        <Button
          variant="disabled"
          custom={tw`mx-4 px-4 text-lightgray-800`}
          isOutline={true}
          onClick={() => navigate(-1)}
        >
          취소
        </Button>
        <Button
          variant="secondary"
          custom={tw`mx-4 px-4`}
          onClick={() => infoUpdate()}
        >
          변경
        </Button>
      </div>
    </div>
  );
};

export default ChangeUserInfo;
