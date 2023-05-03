// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import "twin.macro";

const LoginPage = () => {
  return (
    <div>
      <form>
        <img src={LogoImg} style={{ height: "80px" }} />
        <h2>비밀번호찾기</h2>
        <TextArea variant="email"></TextArea>
        <TextArea variant="password"></TextArea>
        <div style={{ marginBottom: "72px", color: "blue", cursor: "pointer" }}>
          <a href="find-password">비밀번호찾기 &gt;</a>
        </div>
        <LoginButton text="로그인"></LoginButton>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default LoginPage;
