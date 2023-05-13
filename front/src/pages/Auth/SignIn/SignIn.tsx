import { login } from "@/apis/memberAPI";
import { Button } from "@/components/atoms";

import { useState } from "react";
// import SigninButton from "@/pages/Auth/AuthForm/SigninButton";
// import SigninForm from "@/pages/Auth/AuthForm/SigninForm";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Login = () => {
  const navigate = useNavigate();
  const [emailText, setEmailText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");

  return (
    <>
      <div tw="flex flex-col w-[30rem]">
        <div className="LoginForm" tw="flex flex-col">
          <div className="InputField" tw="flex flex-col">
            <label> 이메일 </label>
            <input
              onChange={(e) => setEmailText(e.target.value)}
              type="email"
              tw="border-2"
            ></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 </label>
            <input
              onChange={(e) => setPasswordText(e.target.value)}
              type="password"
              tw="border-2"
            ></input>
          </div>
        </div>

        <div className="ButtonWrap" tw="flex flex-col">
          <Button
            className="LoginBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-blue-400"
            onClick={() => {
              console.log(emailText, passwordText);
              login(emailText, passwordText)
                .then((request) => {
                  console.log("로그인 성공!", request.data);
                  return navigate("/home/mybox/receive");
                })

                .catch((e) => console.log(e));
            }}
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
