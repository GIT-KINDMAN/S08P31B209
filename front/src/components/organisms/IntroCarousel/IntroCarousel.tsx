import { IntroInfo, Slider } from "@/components/molecules/index";

// import tw from "twin.macro";

const IntroCarousel = () => {
  return (
    <div tw="flex">
      <Slider />
      <IntroInfo />
    </div>
  );
};

export default IntroCarousel;
