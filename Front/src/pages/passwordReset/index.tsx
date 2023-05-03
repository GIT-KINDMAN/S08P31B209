// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import { useNavigate } from "react-router-dom";
import "twin.macro";

const PasswordResetPage = () => {
  const navigate = useNavigate();

  return (
    <div tw="flex justify-center">
      <form>
        <img
          src={LogoImg}
          tw="mt-14 mb-6 cursor-pointer "
          onClick={() => navigate("/main")}
        />
        <div tw="font-bold text-2xl border-b-[#ABB6BE] border-b-2 py-4 mb-14">
          비밀번호 재설정
        </div>
        <TextArea variant="password" />
        <TextArea variant="password" />
        <LoginButton text="확인하고 로그인 하기"></LoginButton>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default PasswordResetPage;
