import { Button, TextInput } from "@atomic/atoms";

import { login } from "@api/memberAPI";

import { setAuth } from "@store/slice/authSlice";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailText, setEmailText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");

  return (
    <>
      <div tw="flex flex-col w-[30rem]">
        <div className="LoginForm" tw="flex flex-col mx-auto">
          <div className="InputField" tw="flex flex-col">
            <label> 이메일 </label>
            <TextInput
              onChange={(e) => setEmailText(e.target.value)}
              type="email"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
            ></TextInput>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 </label>
            <TextInput
              onChange={(e) => setPasswordText(e.target.value)}
              type="password"
              custom={tw`border-2 w-80 py-1 rounded-xl focus:border-blue-600 focus:scale-110`}
            ></TextInput>
          </div>
        </div>

        <div className="ButtonWrap" tw="flex flex-col my-8 mx-auto">
          <Button
            className="LoginBtn"
            tw="w-80 my-2 p-2 rounded-[0.5rem] bg-blue-400 text-white"
            isBold
            onClick={() => {
              console.log(emailText, passwordText);
              login(emailText, passwordText)
                .then((request) => {
                  console.log("로그인 성공!", request.data);
                  dispatch(setAuth(request.data.value));
                })
                .then(() => navigate("/home/mybox/receive"))
                .catch((e) => console.log(e));
            }}
          >
            로그인
          </Button>
          <Button
            className="SignupButton"
            variant="primary"
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
