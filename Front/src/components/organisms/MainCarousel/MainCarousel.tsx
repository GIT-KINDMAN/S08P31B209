import { MainInfo, Slider } from "@/components/molecules/index";

import tw from "twin.macro";

const MainCarousel = () => {
  return (
    <div tw="flex">
      <Slider />
      <MainInfo />
    </div>
  );
};

export default MainCarousel;
