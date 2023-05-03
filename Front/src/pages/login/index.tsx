// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import { useNavigate } from "react-router-dom";
import "twin.macro";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div tw="flex justify-center">
      <form>
        <img src={LogoImg} tw="mt-14 mb-6" />
        {/* <div tw="mt-14  h-160 w-480 bg-[url('../../assets/DocDoc.png')]"></div> */}
        <TextArea variant="email"></TextArea>
        <TextArea variant="password"></TextArea>
        <div
          tw="flex justify-end text-blue-600 cursor-pointer mb-72 text-sm"
          onClick={() => navigate("/find-password")}
        >
          비밀번호찾기 &gt;
        </div>
        <LoginButton text="로그인"></LoginButton>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default LoginPage;
