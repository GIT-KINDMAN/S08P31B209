import type { RootState } from "@store/store";

import { updateUserPassword } from "@/apis/memberAPI";
import { Button, Label, TextInput } from "@/components/atoms";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const ChangePassword = () => {
  const [originalPassword, setOriginalPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [checkNotMatch, setCheckNotMatch] = useState(false);
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);

  // 비밀번호 변경
  const passwordUpdate = () => {
    const token = authState.authToken;
    if (newPassword === "" || newPassword !== checkPassword) {
      console.log("입력 똑바로합니다.");
      return;
    }
    updateUserPassword(originalPassword, newPassword, token)
      .then((request) => {
        {
          console.log(request);
          navigate("/home/setting");
        }
      })
      .catch((e) => {
        console.log(e);
        setPasswordWrong(true);
      });
  };

  function validatePassword() {
    if (newPassword !== checkPassword) {
      setCheckNotMatch(true);
      return;
    }
    setCheckNotMatch(false);
  }

  return (
    <div tw="flex flex-col w-full min-w-[40rem] px-6 py-4">
      <label tw="text-3xl">계정 정보 변경</label>
      <hr tw="my-2 min-w-[64rem] max-w-[64rem]  border-t-2 border-blue-600"></hr>
      <div
        className="changeInputWrap"
        tw="flex flex-col min-w-[20rem] max-w-[20rem] mx-auto"
      >
        <div className="InputField" tw="flex flex-col">
          <Label text="기존 비밀번호" isBold />
          <TextInput
            type="password"
            placeholder="기존 비밀번호를 입력하세요"
            custom={tw`border-2 py-1`}
            onChange={(e) => setOriginalPassword(e.target.value)}
          />
        </div>
        {passwordWrong && (
          <div tw="ml-2 text-red-500">기존 비밀번호가 맞지 않습니다.</div>
        )}
        <div className="InputField" tw="flex flex-col">
          <Label text="새 비밀번호" isBold />
          <TextInput
            type="password"
            placeholder="새 비밀번호를 입력하세요"
            custom={tw`border-2 py-1`}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="비밀번호 확인" isBold />
          <TextInput
            type="password"
            placeholder="새 비밀번호를 다시 입력하세요"
            custom={tw`border-2 py-1`}
            onBlur={() => validatePassword()}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>
        {checkNotMatch && (
          <div tw="ml-2 text-red-500">새 비밀번호가 일치하지 않습니다.</div>
        )}
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
          onClick={() => passwordUpdate()}
        >
          변경
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
