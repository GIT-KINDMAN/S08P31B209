import { IntroInfo, IntroNav, Slider } from "@/components/molecules/index";
import { IntroCarousel } from "@/components/organisms";

import Knock from "../../assets/Main/Knock.png";
import MainImg1 from "../../assets/Main/MainImg1.jpg";
import MainImg2 from "../../assets/Main/MainImg2.jpg";
import {
  HomePage,
  HomePage3,
  IntroTitle,
  Page3Title,
  TitleDocDoc,
} from "./Intro.styled";

import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(tw`border border-black flex justify-center`);

const Intro = () => {
  return (
    <>
      <IntroNav />
      {/* 첫번째 페이지 */}
      <HomePage>
        <img src={MainImg1} />
        <IntroTitle style={{ marginTop: "12vh" }}>
          <p> 빠르고</p>
          <p> 간편하게</p>

          <TitleDocDoc style={{ fontSize: "8vw", color: "#3D779A" }}>
            똑똑
          </TitleDocDoc>
        </IntroTitle>
      </HomePage>
      <HomePage>
        <img src={MainImg2} />
        <IntroTitle style={{ marginTop: "12vh" }}>
          <p> 서류 제출</p>
          <p> 놓치지 말고 </p>

          <TitleDocDoc style={{ fontSize: "8vw", color: "#3D779A" }}>
            똑똑
          </TitleDocDoc>
        </IntroTitle>
      </HomePage>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page3-Text </Wrapper>
          <Wrapper> Intro-Page3-carousel </Wrapper>
          <Wrapper> Intro-Page3-Text </Wrapper>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Wrapper> Intro-Page4-Text </Wrapper>
          <Wrapper> Intro-Page4-Image </Wrapper>
          <Wrapper> Intro-Page4-LoginButton </Wrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Intro;
