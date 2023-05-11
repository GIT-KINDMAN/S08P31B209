import { loginAPI } from "@/api/api";
import { Button, Label, TextInput } from "@/components/atoms";

import { useRef, useState } from "react";
// import SigninButton from "@/pages/Auth/AuthForm/SigninButton";
// import SigninForm from "@/pages/Auth/AuthForm/SigninForm";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

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
            <input ref={emailRef} type="email" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 </label>
            <input ref={passwordRef} type="password" tw="border-2"></input>
          </div>
        </div>

        <div className="ButtonWrap" tw="flex flex-col">
          <Button
            className="LoginBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-blue-400"
            onClick={login}
            isDisabled={isLoading}
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
