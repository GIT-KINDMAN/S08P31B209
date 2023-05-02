// import LoginButton from "@/components/atoms/LoginButton/LoginButton";
import { LoginButton, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import "twin.macro";

const LoginPage = () => {
  return (
    <div>
      <form>
        <img src={LogoImg} style={{ height: "80px" }} />
        <TextArea variant="email"></TextArea>
        <TextArea variant="password"></TextArea>
        <div>비밀번호찾기 &gt;</div>
        <LoginButton></LoginButton>
      </form>
    </div>
  );
};

export default LoginPage;
