import { emailVerification, signup } from "@/apis/memberAPI";
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [inputEailVerificationCode, setInputEmailVerificationCode] =
    useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidEmailVerification, setIsValidEmailVerification] =
    useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const [emailError, setEmailError] = useState(false);
  const [emailVerificationError, setEmailVerificationError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [genderError, setGenderdError] = useState(false);

  const handleEmailBlur = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(emailText);
    setEmailError(!isValidEmail);
    setIsValidEmail(isValidEmail);
  };

  const handleEamilVerification = () => {
    const isValid = inputEailVerificationCode === emailVerificationCode;
    if (isValid) {
      alert("이메일인증을 완료하였습니다.");
      setEmailError(!isValid);
    }
    setEmailVerificationError(!isValid);
    setIsValidEmailVerification(isValid);
  };

  const handlePasswordBlur = () => {
    // 비밀번호 정규식을 사용하여 유효성 검사
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValidPassword = passwordRegex.test(passwordText);
    setPasswordError(!isValidPassword);
    setIsValidPassword(isValidPassword);
  };

  const handleConfirmPasswordBlur = () => {
    const isValid = passwordText === confirmPassword;
    setPasswordConfirmError(!isValid);
    setIsValidConfirmPassword(isValid);
  };

  const handleNameBlur = () => {
    const isValid = userName !== "";
    setNameError(!isValid);
  };

  const handleBirthBlur = () => {
    const isValid = userBirth !== "";
    setBirthError(!isValid);
  };

  const handleGenderBlur = () => {
    const isValid = userGender !== "";
    setGenderdError(!isValid);
  };

  const handleSubmit = () => {
    // 이메일이나 비밀번호가 비어 있으면 에러 표시
    if (emailText === "" || !isValidEmail) {
      setEmailError(true);
    }

    if (inputEailVerificationCode === "" || !isValidEmailVerification) {
      setEmailVerificationError(true);
    }

    if (passwordText === "" || !isValidPassword) {
      setPasswordError(true);
    }

    if (confirmPassword === "" || !isValidConfirmPassword) {
      setPasswordConfirmError(true);
    }

    if (userName === "") {
      setNameError(true);
    }

    if (userBirth === "") {
      setBirthError(true);
    }

    if (userGender === "") {
      setGenderdError(true);
    }

    // 이메일과 비밀번호가 모두 입력되면 회원 가입 처리
    if (
      emailText !== "" &&
      isValidEmail &&
      passwordText !== "" &&
      isValidPassword &&
      confirmPassword !== "" &&
      isValidConfirmPassword &&
      userName !== "" &&
      userBirth !== "" &&
      userGender !== ""
    ) {
      alert("회원가입을 완료하였습니다");
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
      });
    }
  };

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
      <div tw="flex ml-[6.1rem] flex-col w-[40rem]">
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
        <div className="RequireInputWrap" tw="flex flex-col mx-auto my-2">
          <label tw="text-xs text-red-300">
            * 회원 가입을 위한 필수 사항입니다.
          </label>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="이메일" isBold />
            <div>
              <TextInput
                type="email"
                custom={tw`border-2 w-80 py-1 mr-4 rounded-xl focus:border-blue-600 focus:scale-110`}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="이메일을 입력해주세요"
                onBlur={handleEmailBlur}
              />
              <Button
                className="optionalbutton"
                variant="primary"
                isOutline={true}
                custom={tw`mx-auto min-w-[6rem] max-w-[8rem] ml-4`}
                onClick={() =>
                  emailVerification(emailText).then((request) => {
                    setEmailVerificationCode(request.data.value.code);
                    setEmailError(true);
                    setEmailVerificationError(true);
                  })
                }
              >
                이메일인증
              </Button>
            </div>
            {!isValidEmail && (
              <p tw="text-red-a700 text-sm">
                유효한 이메일 주소를 입력해주세요.
              </p>
            )}
            {emailError && (
              <p tw="text-red-a700 text-sm">이메일인증을 해주세요.</p>
            )}
            {/* {emailText !== "" &&
              emailVerificationCode === inputEailVerificationCode &&
              !emailError &&
              !emailVerificationError && (
                <p tw="text-blue-700 text-sm">이메일인증을 완료하였습니다.</p>
              )} */}
          </div>
          {emailVerificationCode ? (
            <div className="InputField" tw="flex flex-col my-2">
              <Label text="이메일 인증 코드 입력" isBold />

              <div tw="flex">
                <TextInput
                  type="email"
                  custom={tw`border-2 w-80 py-1 mr-4 rounded-xl focus:border-blue-600 focus:scale-110`}
                  onChange={(e) =>
                    setInputEmailVerificationCode(e.target.value)
                  }
                />
                <Button
                  className="optionalbutton"
                  variant="primary"
                  isOutline={true}
                  custom={tw`mx-auto min-w-[6rem] max-w-[8rem] ml-4`}
                  onClick={handleEamilVerification}
                >
                  인증코드확인
                </Button>
              </div>
              {!isValidEmailVerification && (
                <p tw="text-red-a700 text-sm">
                  유효한 이메일인증 코드를 입력해주세요.
                </p>
              )}
              {emailVerificationError && (
                <p tw="text-red-a700 text-sm">
                  이메일인증 코드를 입력해주세요.
                </p>
              )}
            </div>
          ) : null}
          {/* {emailText !== "" &&
            emailVerificationCode === inputEailVerificationCode &&
            !emailError &&
            !emailVerificationError && (
              <p tw="text-blue-700 text-sm">이메일인증을 완료하였습니다.</p>
            )} */}
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="비밀번호 입력" isBold />
            <TextInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
              onChange={(e) => setPasswordText(e.target.value)}
              onBlur={handlePasswordBlur}
            />
            {!isValidPassword && (
              <p tw="text-red-a700 text-sm min-w-[20rem] max-w-[20rem]">
                비밀번호는 8자 이상이며, 최소한 하나의 영문자와 하나의 숫자를
                포함해야 합니다.
              </p>
            )}
            {passwordError && (
              <p tw="text-red-a700 text-sm">비밀번호를 입력해주세요.</p>
            )}
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="비밀번호 재확인" isBold />
            <TextInput
              type="password"
              onBlur={handleConfirmPasswordBlur}
              placeholder="비밀번호를 재확인을 입력해주세요"
              onChange={(e) => setConfirmPassword(e.target.value)}
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
            />
            {!isValidConfirmPassword && (
              <p tw="text-red-a700 text-sm">비밀번호가 일치하지 않습니다.</p>
            )}
            {passwordConfirmError && (
              <p tw="text-red-a700 text-sm">비밀번호 재확인을 입력해주세요.</p>
            )}
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="이름" isBold />
            <TextInput
              type="text"
              placeholder="이름을 입력해주세요"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={handleNameBlur}
            />
            {nameError && (
              <p tw="text-red-a700 text-sm">이름을 입력해주세요.</p>
            )}
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="생년월일" isBold />
            <input
              type="date"
              tw="border-2 py-1 px-2 w-80 rounded-xl border-b border-lightgray-400"
              max={localDate.toISOString().split("T")[0]}
              defaultValue={localDate.toISOString().split("T")[0]}
              onKeyDown={(e) => e.preventDefault()}
              onChange={(e) => setUserBirth(e.target.value)}
              onBlur={handleBirthBlur}
            />
            {birthError && (
              <p tw="text-red-a700 text-sm">생년월일을 입력해주세요.</p>
            )}
          </div>
          <div className="InputField" tw="flex flex-col my-2">
            <Label text="성별" isBold />
            <div tw="flex">
              <div className="RadioItem" tw="ml-20">
                <input
                  type="radio"
                  tw="border-2 py-1"
                  value="남자"
                  name="gender"
                  onClick={() => setUserGender("male")}
                  onBlur={handleGenderBlur}
                ></input>
                <label> 남자 </label>
              </div>
              <div className="RadioItem" tw="ml-20">
                <input
                  type="radio"
                  tw="border-2 py-1"
                  value="여자"
                  name="gender"
                  onClick={() => setUserGender("female")}
                  onBlur={handleGenderBlur}
                ></input>
                <label> 여자 </label>
              </div>
            </div>
            {genderError && (
              <p tw="text-red-a700 text-sm">성별을 입력해주세요.</p>
            )}
          </div>
        </div>
        {/* 선택 입력(접혀있음) */}
        {isOptionalInfo === false ? (
          <Button
            className="optionalbutton"
            variant="primary"
            isOutline={true}
            custom={tw`mx-auto ml-56`}
            onClick={() => setISOptionalInfo(true)}
          >
            추가입력
          </Button>
        ) : (
          <Button
            className="optionalbutton"
            variant="primary"
            isOutline={true}
            custom={tw`mx-auto px-6 ml-56`}
            onClick={() => setISOptionalInfo(false)}
          >
            접기
          </Button>
        )}
        {isOptionalInfo === true ? (
          <div
            className="OptionalInputWrap"
            tw="flex flex-col my-2 mx-auto ml-24"
          >
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
        <div className="ButtonWrap" tw="flex flex-col mx-auto my-4 ml-24">
          <Button
            className="RegisterBtn"
            custom={tw`mr-1 p-2 rounded-[0.5rem] bg-blue-400 min-w-[20rem] max-w-[20rem] text-white`}
            isBold
            onClick={handleSubmit}
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
