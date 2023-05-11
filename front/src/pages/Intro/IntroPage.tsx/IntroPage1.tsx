import MainImg1 from "@/assets/Main/MainImg1.jpg";
import { Image, Label } from "@/components/atoms";

import tw from "twin.macro";

const IntroPage1 = () => {
  return (
    <div tw="relative h-fit  min-w-[80rem] ">
      <div tw="absolute left-24 bottom-80">
        <Label
          text="빠르고"
          fontSize="7xl"
          isBold={true}
          custom={tw`py-2 text-lightgray-800`}
        />
        <Label
          text="간편하게"
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
      <Image imageUrl={MainImg1} custom={tw`w-full`} />
    </div>
  );
};

export default IntroPage1;
