import { Button, Label, TextInput } from "@/components/atoms";

// import SigninButton from "@/pages/Auth/AuthForm/SigninButton";
// import SigninForm from "@/pages/Auth/AuthForm/SigninForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Login = () => {
  const navigate = useNavigate();
  // const login = () => {
  //   return console.log("login");
  // };

  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  console.log(emailText, passwordText);

  return (
    <>
      <div tw="flex flex-col w-[30rem]">
        <div className="LoginForm" tw="flex flex-col">
          <div className="InputField" tw="flex flex-col">
            <Label text="이메일" fontSize="lg" />
            <TextInput
              type="email"
              onChange={(e: any) => setEmailText(e.target.value)}
            />
          </div>
          <div className="InputField" tw="flex flex-col">
            <Label text="비밀번호" fontSize="lg" />
            <TextInput
              type="password"
              onChange={(e: any) => setPasswordText(e.target.value)}
            />
          </div>
        </div>
        {/* <SigninButton /> */}
        <div className="ButtonWrap" tw="flex flex-col mx-auto">
          <Button
            className="LoginButton"
            variant="primary"
            custom={tw`w-80 mt-8 mb-2 p-2 rounded-[0.5rem] bg-blue-400 text-white`}
          >
            로그인
          </Button>
          <Button
            className="SignupButton"
            variant="primary"
            // isOutline={true}
            custom={tw`w-80 my-2 p-2 rounded-[0.5rem] bg-white text-blue-400 border-2`}
            onClick={() => navigate("/auth/signup")}
          >
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
