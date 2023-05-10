import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    return console.log("login");
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
            onClick={() => login}
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
