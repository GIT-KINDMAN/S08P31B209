import { loginAPI } from "@/api/api";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await loginAPI.login(email, password);
      setIsLoading(false);

      if (response.status === 200) {
        navigate("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      setIsLoading(false);
      alert("로그인에 실패했습니다.");
    }
  };

  const login = () => {
    if (emailRef.current && passwordRef.current) {
      signIn(emailRef.current.value, passwordRef.current.value);
    }
  };

  return (
    <>
      <div tw="flex flex-col w-[30rem]">
        <div className="LoginForm" tw="flex flex-col">
          <div className="InputField" tw="flex flex-col">
            <label> 이메일 </label>
            <input type="email" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 </label>
            <input type="password" tw="border-2"></input>
          </div>
        </div>
        <div className="ButtonWrap" tw="flex flex-col">
          <button
            className="LoginBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-blue-400"
            onClick={login}
            disabled={isLoading}
          >
            로그인
          </button>
          <button
            className="SignUpBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-gray-400"
            onClick={() => navigate("/auth/signup")}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
