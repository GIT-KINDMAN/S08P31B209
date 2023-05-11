import { InfoContent, InfoTitle } from "./IntroInfo.styled";
import { inputProps } from "./IntroInfo.types";

// import tw from "twin.macro";

const IntroInfo = ({ currentSlide }: inputProps) => {
  return (
    <div tw=" ml-40 h-20">
      <div tw="flex">
        <InfoTitle text="똑똑">똑똑</InfoTitle>
        <InfoTitle check={false}> 의 </InfoTitle>
        <InfoTitle text="똑똑">똑똑</InfoTitle>
        <InfoTitle check={false}> 한 기능</InfoTitle>
      </div>
      <InfoContent currentSlide={currentSlide}> 123123</InfoContent>
    </div>
  );
};

export default IntroInfo;
