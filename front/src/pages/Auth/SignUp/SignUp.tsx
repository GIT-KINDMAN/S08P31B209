import { signup } from "@/apis/memberAPI";
import { Button, Label, TextInput } from "@/components/atoms";

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
  // const [fileUrl, setFileUrl] = useState<string | null>(null);

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
    signup(
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
        navigate("/auth");
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
    // setFileUrl,
  );

  const [isOptionalInfo, setISOptionalInfo] = useState(false);
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
        {/* <div className="ImageForm" tw="flex flex-col ">
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
                <input type="file" />
              </div>
            )}
          </div>
        </div> */}
        {/* 필수 입력 */}
        <div className="RequireInputWrap" tw="flex flex-col my-2">
          <label tw="text-xs text-red-300">
            * 회원 가입을 위한 필수 사항입니다.
          </label>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="이메일" isBold />

            <TextInput
              type="email"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
              onChange={(e) => setEmailText(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="비밀번호 입력" isBold />
            <TextInput
              type="password"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
              onChange={(e) => setPasswordText(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="비밀번호 확인" isBold />
            <TextInput
              type="password"
              placeholder="입력한 비밀번호를 입력해주세요"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
            />
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="이름" isBold />
            <TextInput
              type="text"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col my-2">
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
          <div className="InputField" tw="flex flex-col my-2">
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
        {isOptionalInfo === false ? (
          <Button
            className="optionalbutton"
            variant="primary"
            isOutline={true}
            custom={tw`mx-auto`}
            onClick={() => setISOptionalInfo(true)}
          >
            추가입력
          </Button>
        ) : (
          <Button
            className="optionalbutton"
            variant="primary"
            isOutline={true}
            custom={tw`mx-auto px-6`}
            onClick={() => setISOptionalInfo(false)}
          >
            접기
          </Button>
        )}
        {isOptionalInfo === true ? (
          <div className="OptionalInputWrap" tw="flex flex-col my-2 mx-auto">
            <label tw="text-xs">추가 정보는 필수 사항이 아닙니다.</label>
            <div className="InputField" tw="flex flex-col my-2">
              <Label text="연락처" isBold />
              <TextInput
                type="tel"
                custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </div>
            <div className="InputField" tw="flex flex-col my-2">
              <Label text="거주지" isBold />
              <TextInput
                type="text"
                custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </div>
            <div className="InputField" tw="flex flex-col my-2">
              <Label text="소속" isBold />
              <TextInput
                type="text"
                custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
                onChange={(e) => setUserGroup(e.target.value)}
              />
            </div>
            <div className="InputField" tw="flex flex-col my-2">
              <Label text="직위" isBold />
              <TextInput
                type="text"
                custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
                onChange={(e) => setUserPosition(e.target.value)}
              />
            </div>
          </div>
        ) : null}
        <div className="ButtonWrap" tw="flex flex-col mx-auto my-4">
          <Button
            className="RegisterBtn"
            custom={tw`mr-1 p-2 rounded-[0.5rem] bg-blue-400 min-w-[20rem] max-w-[20rem] text-white`}
            isBold
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
            custom={tw`mr-1 my-4 p-2 rounded-[0.5rem] bg-gray-400 min-w-[20rem] max-w-[20rem]`}
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
