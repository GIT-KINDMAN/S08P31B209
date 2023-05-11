import MainImg1 from "../../../assets/Main/MainImg1.jpg";
import content1 from "../../../assets/Main/content1.png";
import { Carousel, IntroTitle } from "../../atoms/index";
import { Button, Container, SliderContainer } from "./styled";

import { useEffect, useRef, useState } from "react";

// import tw from "twin.macro";

const Slider = () => {
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);
  return (
    <div>
      {currentSlide === 0 ? (
        <IntroTitle title={"문서를 보냈나요?"}></IntroTitle>
      ) : null}
      {currentSlide === 1 ? (
        <IntroTitle title={"문서를 받았나요?"}></IntroTitle>
      ) : null}
      {currentSlide === 2 ? (
        <IntroTitle title={"제출한 문서확인까지!"}></IntroTitle>
      ) : null}
      <Container>
        {currentSlide}

        <Button onClick={prevSlide}>&lt;</Button>
        <Button onClick={nextSlide} tw="ml-16">
          &gt;
        </Button>
        <SliderContainer ref={slideRef}>
          <Carousel key={1} image={content1} />
          <Carousel key={2} image={MainImg1} />
          <Carousel key={3} image={content1} />
        </SliderContainer>
      </Container>
    </div>
  );
};

export default Slider;
