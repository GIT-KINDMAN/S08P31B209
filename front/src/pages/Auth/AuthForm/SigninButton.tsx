import { Button } from "@/components/atoms";

import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const SigninButton = () => {
  const navigate = useNavigate();
  return (
    <div className="ButtonWrap" tw="flex flex-col mx-auto">
      <Button
        className="LoginButton"
        variant="primary"
        custom={tw`w-80 mt-8 mb-2 p-2 rounded-[0.5rem] bg-blue-400 text-white`}
        onClick={() => console.log("로그인api")}
      >
        로그인
      </Button>
      <Button
        className="SignupButton"
        variant="primary"
        // isOutline={true}
        custom={tw`w-80 my-2 p-2 rounded-[0.5rem] bg-white text-blue-400 border-2`}
        onClick={() => navigate("/auth/signup")}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SigninButton;
