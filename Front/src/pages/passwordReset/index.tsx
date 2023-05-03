// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import "twin.macro";

const PasswordResetPage = () => {
  return (
    <div>
      <form>
        <img src={LogoImg} style={{ height: "80px" }} />
        <h2>비밀번호 재설정</h2>
        <TextArea variant="password" />
        <TextArea variant="password" />
        <LoginButton text="확인하고 로그인 하기"></LoginButton>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default PasswordResetPage;
