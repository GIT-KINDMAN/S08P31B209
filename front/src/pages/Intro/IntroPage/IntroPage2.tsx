import MainImg2 from "@/assets/Main/MainImg2.jpg";
import { Image, Label } from "@/components/atoms";

import tw from "twin.macro";

const IntroPage2 = () => {
  return (
    <div tw="relative h-fit  min-w-[80rem]">
      <div tw="absolute left-24 bottom-80">
        <Label
          text="서류 제출"
          fontSize="7xl"
          isBold={true}
          custom={tw`py-2 text-lightgray-800`}
        />
        <Label
          text="놓치지 말고"
          fontSize="7xl"
          isBold={true}
          custom={tw`py-2 text-lightgray-800`}
        />
        <Label
          text="똑똑"
          fontSize="8xl"
          isBold={true}
          custom={tw`py-2  m-2 text-blue-500 animate-bounce`}
        />
      </div>
      <Image imageUrl={MainImg2} custom={tw`w-full`} />
    </div>
  );
};

export default IntroPage2;
