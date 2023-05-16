import Knock from "@/assets/Main/Knock.png";
import { Button, Image } from "@/components/atoms";

import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const IntroPage4 = () => {
  const navigate = useNavigate();
  return (
    <div tw="min-w-[80rem] min-h-[42rem] flex justify-center items-center">
      <Image
        imageUrl={Knock}
        custom={tw`min-w-[32rem] max-w-[32rem] mr-[10rem]`}
      />
      <div>
        <div tw="text-5xl text-[#1E5471] font-bold mb-20">똑똑!</div>
        <div tw="text-5xl text-[#1E5471] font-bold mb-20">시작할까요?</div>
        <Button
          variant="secondary"
          custom={tw`py-4 px-8 text-black animate-bounce`}
          isBold
          fontSize="xl"
          onClick={() => navigate("/auth/signup")}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default IntroPage4;
