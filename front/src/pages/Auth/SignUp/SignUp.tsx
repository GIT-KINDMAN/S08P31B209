import { memberAPI } from "@/apis/api";
import { Button, Image, Label, TextInput } from "@/components/atoms";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

interface signupProps {
  emailText: string;
  passwordText: string;
  userName: string;
  userBirth: string;
  userGender: string;
  userPhone: string;
  userAddress: string;
  userGroup: string;
  userPosition: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [userPosition, setUserPosition] = useState("");

  // const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const SignUp = ({
    emailText,
    passwordText,
    userName,
    userBirth,
    userGender,
    userPhone,
    userAddress,
    userGroup,
    userPosition,
  }: signupProps) => {
    memberAPI
      .signup(
        emailText,
        passwordText,
        userName,
        userBirth,
        userGender,
        userPhone,
        userAddress,
        userGroup,
        userPosition,
      )
      .then((request) => {
        console.log("회원가입성공", request.data);
        navigate("/home/create");
      })
      .catch((e) => console.log(e));
  };
  console.log(
    emailText,
    passwordText,
    userName,
    userAddress,
    userBirth,
    userGender,
    userGroup,
    userPhone,
    userPosition,
    setFileUrl,
  );
  // const handleFileUpload = <T extends File>(acceptedFiles: T[]) => {
  //   setFile(acceptedFiles[0]);
  //   const url = URL.createObjectURL(acceptedFiles[0]);
  //   setFileUrl(url);
  // };
  const localDate = new Date();
  return (
    <>
      <div tw="flex flex-col w-[20rem]">
        {/* 사용자 사진 입력 */}
        <div className="ImageForm" tw="flex flex-col ">
          <div className="ImageField" tw="flex flex-col ">
            <label> 증명사진 업로드 </label>

            {fileUrl ? (
              <div>
                <Image imageUrl={fileUrl} />
              </div>
            ) : (
              <div>
                <div tw="border-2 py-1 bg-gray-400 w-[144px]">
                  증명사진 업로드
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 필수 입력 */}
        <div className="RequireInputWrap" tw="flex flex-col">
          <label>필수 입력란</label>
          <div className="InputField" tw="flex flex-col">
            <Label text="이메일" isBold />
            <TextInput
              type="email"
              custom={tw`border-2 py-1`}
              onChange={(e) => setEmailText(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="비밀번호 입력" isBold />
            <TextInput
              type="password"
              custom={tw`border-2 py-1`}
              onChange={(e) => setPasswordText(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="비밀번호 확인" isBold />
            <TextInput type="password" custom={tw`border-2 py-1`} />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="이름" isBold />
            <TextInput
              type="text"
              custom={tw`border-2 py-1`}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="생년월일" isBold />
            <input
              type="date"
              tw="border-2 py-1 "
              max={localDate.toISOString().split("T")[0]}
              defaultValue={localDate.toISOString().split("T")[0]}
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
                  tw="border-2 py-1"
                  value="남자"
                  name="gender"
                  onClick={() => setUserGender("male")}
                ></input>
                <label> 남자 </label>
              </div>
              <div className="RadioItem">
                <input
                  type="radio"
                  tw="border-2 py-1"
                  value="여자"
                  name="gender"
                  onClick={() => setUserGender("female")}
                ></input>
                <label> 여자 </label>
              </div>
            </div>
          </div>
        </div>
        {/* 선택 입력(접혀있음) */}
        <div className="OptionalInputWrap" tw="flex flex-col">
          <hr tw="my-4" />
          <label>선택 입력란</label>
          <div className="InputField" tw="flex flex-col">
            <Label text="연락처" isBold />
            <TextInput
              type="tel"
              custom={tw`border-2 py-1`}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="거주지" isBold />
            <TextInput
              type="text"
              custom={tw`border-2 py-1`}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="소속" isBold />
            <TextInput
              type="text"
              custom={tw`border-2 py-1`}
              onChange={(e) => setUserGroup(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="직위" isBold />
            <TextInput
              type="text"
              custom={tw`border-2 py-1`}
              onChange={(e) => setUserPosition(e.target.value)}
            />
          </div>
        </div>
        <div className="ButtonWrap" tw="flex flex-col mx-auto my-4">
          <Button
            className="RegisterBtn"
            custom={tw`m-2 p-2 rounded-[0.5rem] bg-blue-400 min-w-[28rem] max-w-[28rem]`}
            onClick={() =>
              SignUp({
                emailText,
                passwordText,
                userName,
                userBirth,
                userGender,
                userPhone,
                userAddress,
                userGroup,
                userPosition,
              })
            }
          >
            회원가입
          </Button>
          <Button
            className="HomeBtn"
            custom={tw`m-2 p-2 rounded-[0.5rem] bg-gray-400 min-w-[28rem] max-w-[28rem]`}
            onClick={() => navigate(-1)}
          >
            돌아가기
          </Button>
        </div>
      </div>
    </>
  );
};

export default Register;
