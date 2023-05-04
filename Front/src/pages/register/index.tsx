import { LoginButton, Radio, TextArea } from "@/components/atoms";

import LogoImg from "../../assets/DocDoc.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "twin.macro";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div tw="flex justify-center">
      <form>
        <img
          src={LogoImg}
          tw="mt-14 mb-6 cursor-pointer"
          onClick={() => navigate("/main")}
        />
        <TextArea variant="email"></TextArea>
        <TextArea variant="password"></TextArea>
        <TextArea variant="password"></TextArea>
        <TextArea variant="name"></TextArea>
        <TextArea variant="birth"></TextArea>
        <LoginButton text="회원가입"></LoginButton>
      </form>
    </div>
  );
};

export default RegisterPage;
