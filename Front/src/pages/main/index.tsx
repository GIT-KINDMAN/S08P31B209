import { MainNav } from "@/components/molecules";
import { Slider } from "@/components/molecules/index";

import Knock from "../../assets/Main/Knock.png";
import MainImg1 from "../../assets/Main/MainImg1.jpg";
import MainImg2 from "../../assets/Main/MainImg2.jpg";
// import content1 from "../../assets/Main/content1.png";
import {
  HomePage,
  HomePage3,
  MainTitle,
  Page3Title,
  TitleDocDoc,
} from "./style";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const mainPage1 = useRef<HTMLDivElement>(null);
  // const mainPage2 = useRef<HTMLDivElement>(null);
  // const mainPage3 = useRef<HTMLDivElement>(null);

  const handleRef = () => {
    const location = mainPage1.current?.offsetTop;
    console.log(location);
  };

  return (
    <div>
      <MainNav />
      <HomePage>
        <img src={MainImg1} style={{ width: "100vw" }} onClick={handleRef} />
        <MainTitle style={{ marginTop: "12vh" }}>
          <p> 빠르고</p>
          <p> 간편하게</p>

          <TitleDocDoc style={{ fontSize: "10vw", color: "#3D779A" }}>
            똑똑
          </TitleDocDoc>
        </MainTitle>
        {/* <TitleDocDoc style={{ fontSize: "12vh", color: "#3D779A" }}>
          똑똑
        </TitleDocDoc> */}
      </HomePage>
      <HomePage>
        <img src={MainImg2} style={{ width: "100vw" }} />
        <MainTitle style={{ marginTop: "12vh" }}>
          <p> 서류 제출</p>
          <p> 놓치지 말고 </p>

          <TitleDocDoc style={{ fontSize: "10vw", color: "#3D779A" }}>
            똑똑
          </TitleDocDoc>
        </MainTitle>
      </HomePage>
      <HomePage3>
        {/* {carouselState === 0 ? <Page3Title>문서를 보내나요?</Page3Title> : null}
        {carouselState === 1 ? <Page3Title>문서를 받았나요?</Page3Title> : null}
        {carouselState === 2 ? (
          <Page3Title>제출된 문서확인까지</Page3Title>
        ) : null}
        <button
          onClick={() => {
            if (0 < carouselState && carouselState <= 2) {
              setCarouselState(carouselState - 1);
            }
            if (carouselState === 0) {
              setCarouselState(2);
            }
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            if (0 <= carouselState && carouselState < 2) {
              setCarouselState(carouselState + 1);
            }
            if (carouselState === 2) {
              setCarouselState(0);
            }
          }}
        >
          &gt;
        </button> */}
        <Slider />
      </HomePage3>
      <HomePage>
        <img
          src={Knock}
          style={{ width: "535px", marginTop: "80px", marginLeft: "240px" }}
        />
        {/* <MainTitle>똑똑</MainTitle>
        <MainTitle>시작할까요?</MainTitle> */}
      </HomePage>
      <HomePage>
        <div>Home Page</div>
        <div>
          <button onClick={() => navigate("/mybox")}> 보관함으로 이동</button>
        </div>
        <div>
          <button onClick={() => navigate("/editor")}> 에디터로 이동</button>
        </div>
        <div>
          <button onClick={() => navigate("/mybox")}> 보관함으로 이동</button>
        </div>
        <div>
          <button onClick={() => navigate("/editor")}> 에디터로 이동</button>
        </div>
      </HomePage>
    </div>
  );
};

export default MainPage;
