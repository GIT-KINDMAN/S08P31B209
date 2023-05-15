import IntroNav from "@/pages/Intro/IntroNav/IntroNav";
import IntroPage1 from "@/pages/Intro/IntroPage.tsx/IntroPage1";
import IntroPage2 from "@/pages/Intro/IntroPage.tsx/IntroPage2";
import IntroPage3 from "@/pages/Intro/IntroPage.tsx/IntroPage3";
import IntroPage4 from "@/pages/Intro/IntroPage.tsx/IntroPage4";

// import Knock from "../../assets/Main/Knock.png";
// import { useNavigate } from "react-router-dom";
import "twin.macro";

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
      <IntroPage4 />
    </>
  );
};

export default Intro;
