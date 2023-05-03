// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import "twin.macro";

const FindPasswordPage = () => {
  return (
    <div>
      <form>
        <img src={LogoImg} style={{ height: "80px" }} />
        <h2>비밀번호찾기</h2>
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
