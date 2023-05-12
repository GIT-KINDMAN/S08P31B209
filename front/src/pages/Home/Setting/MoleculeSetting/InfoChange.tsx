import { Label, TextInput } from "@/components/atoms";

import { useState } from "react";
import tw from "twin.macro";

const InfoChange = () => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [userPosition, setUserPosition] = useState("");
  return (
    <div>
      <div className="RequireInputWrap" tw="flex flex-col">
        <label>필수 입력란</label>
        <div className="InputField" tw="flex flex-col">
          <Label text="이메일" isBold />
          <TextInput
            type="email"
            custom={tw`border-2`}
            onChange={(e) => setEmailText(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="비밀번호 입력" isBold />
          <TextInput
            type="password"
            custom={tw`border-2`}
            onChange={(e) => setPasswordText(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="비밀번호 확인" isBold />
          <TextInput type="password" custom={tw`border-2`} />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="이름" isBold />
          <TextInput
            type="text"
            custom={tw`border-2`}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="생년월일" isBold />
          <input
            type="date"
            tw="border-2 "
            // defaultValue={localDate.toISOString().split("T")[0]}
            onKeyDown={(e) => e.preventDefault()}
            onChange={(e) => setUserBirth(e.target.value)}
          />
        </div>
        <div className="InputField" tw="flex flex-col">
          <Label text="성별" isBold />
          <div tw="flex flex-row justify-around">
            <div className="RadioItem">
              <input
                type="radio"
                tw="border-2"
                value="남자"
                name="gender"
                onClick={() => setUserGender("male")}
              ></input>
              <label> 남자 </label>
            </div>
            <div className="RadioItem">
              <input
                type="radio"
                tw="border-2"
                value="여자"
                name="gender"
                onClick={() => setUserGender("female")}
              ></input>
              <label> 여자 </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoChange;
