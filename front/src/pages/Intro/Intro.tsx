import { Image, Label } from "@/components/atoms";
import IntroNav from "@/pages/Intro/IntroNav/IntroNav";
import IntroPage1 from "@/pages/Intro/IntroPage/IntroPage1";
import IntroPage2 from "@/pages/Intro/IntroPage/IntroPage2";
import IntroPage3 from "@/pages/Intro/IntroPage/IntroPage3";

import Knock from "../../assets/Main/Knock.png";

import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Intro = () => {
  // const navigate = useNavigate();

  return (
    <>
      <IntroNav />
      {/* 첫번째 페이지 */}
      <IntroPage1 />

      {/* 두번째 페이지 */}
      <IntroPage2 />
      {/* 캐러셀 영역*/}
      <IntroPage3 />
      <div>
        <div>
          <div> Intro-Page4-Text </div>
          <div> Intro-Page4-Image </div>
          <div> Intro-Page4-LoginButton </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
