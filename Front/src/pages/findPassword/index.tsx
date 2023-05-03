// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import { useNavigate } from "react-router-dom";
import "twin.macro";

const FindPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div tw="flex justify-center">
      <form>
        <img
          src={LogoImg}
          tw="mt-14 mb-6 cursor-pointer"
          onClick={() => navigate("/main")}
        />
        <div tw="font-bold text-2xl border-b-[#ABB6BE] border-b-2 py-4 mb-14">
          비밀번호찾기
        </div>
        <TextArea variant="email" />
        <TextArea variant="name" />
        <TextArea variant="birth" />
        <LoginButton text="비밀번호 재설정"></LoginButton>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default FindPasswordPage;
