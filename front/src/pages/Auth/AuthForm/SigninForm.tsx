import { Button, Label, TextInput } from "@/components/atoms";

import { useState } from "react";

const SigninForm = () => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  console.log(emailText, passwordText);
  return (
    <div className="LoginForm" tw="flex flex-col">
      <div className="InputField" tw="flex flex-col">
        <Label text="이메일" fontSize="lg" />
        <TextInput
          type="email"
          onChange={(e: any) => setEmailText(e.target.value)}
        />
      </div>
      <div className="InputField" tw="flex flex-col">
        <Label text="비밀번호" fontSize="lg" />
        <TextInput
          type="password"
          onChange={(e: any) => setPasswordText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SigninForm;
