import mainImg1 from "@/assets/Main/MainImg1.jpg";
import mainImg2 from "@/assets/Main/MainImg2.jpg";
import content1 from "@/assets/Main/content1.png";
import { Image } from "@/components/atoms";

import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tw from "twin.macro";

const ShowCase = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const [slideState, setSlideState] = useState(0);
  useEffect(() => {
    setSlideState(slideState);
    console.log("slideState", slideState);
  }, [slideState]);

  const handleBeforeChange = (current: number) => {
    const currentImageIndex = (current + 1) % 3;
    console.log("current", current);
    setSlideState(currentImageIndex);
  };
  return (
    <div tw="flex justify-center scale-110 py-20 ">
      <div className="page-carousel" tw="w-96 flex flex-col  my-20">
        <Slider beforeChange={handleBeforeChange} {...settings}>
          <div>
            <p tw="text-4xl text-[#2E6888] font-bold">문서를 보내나요?</p>
            <Image imageUrl={mainImg1} custom={tw`mt-20`} />
          </div>
          <div>
            <p tw="text-4xl text-[#2E6888] font-bold"> 문서를 받았나요?</p>
            <Image imageUrl={content1} />
          </div>
          <div>
            <p tw="text-4xl text-[#2E6888] font-bold"> 제출한 문서 확인까지</p>
            <Image imageUrl={mainImg2} custom={tw`mt-20`} />
          </div>
        </Slider>
      </div>
      <div tw="mt-20 ml-40 text-4xl font-bold">
        <div tw="flex">
          <div tw="text-5xl text-[#2E6888] px-2 animate-bounce "> 똑똑</div>
          <div> 의 </div>
          <div tw="text-5xl text-[#2E6888] px-2 animate-bounce"> 똑똑 </div>
          <div> 한 기능 </div>
        </div>
        <div tw="ml-10">
          <div tw="my-12">
            {slideState === 0 ? (
              <p tw="text-[#FF5B4E] "> 템플릿 관리</p>
            ) : (
              <p tw="text-[#DA2200]"> 템플릿 관리</p>
            )}
            {slideState === 0 ? (
              <div tw="mt-4">
                <p tw="text-base ml-10"> 자주 사용하는 문서를 쉽게 사용하고</p>
                <p tw="text-base ml-10"> 업무시간을 줄여보세요</p>
              </div>
            ) : null}
          </div>
          <div tw="my-12">
            {slideState === 1 ? (
              <p tw="text-[#FF5B4E]"> 문서 자동화</p>
            ) : (
              <p tw="text-[#DA2200]"> 문서 자동화</p>
            )}

            {slideState === 1 ? (
              <div tw="mt-4">
                <p tw="text-base ml-10"> 작성 해야 하는 문서가 있나요?</p>
                <p tw="text-base ml-10">
                  똑똑이 알아서 필요한 내용을 입력해줘요
                </p>
              </div>
            ) : null}
          </div>
          <div tw="my-12">
            {slideState === 2 ? (
              <p tw="text-[#FF5B4E]">작업 스케쥴 관리</p>
            ) : (
              <p tw="text-[#DA2200]">작업 스케쥴 관리</p>
            )}

            {slideState === 2 ? (
              <div tw="mt-4">
                <p tw="text-base ml-10"> 제출한 문서와 제출된 문서</p>
                <p tw="text-base ml-10"> 제출해야할 문서까지 효율적으로 관리</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
