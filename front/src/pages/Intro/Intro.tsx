import Logo from "@/assets/DocDoc.png";

// import Knock from "../../assets/Main/Knock.png";
import MainImg1 from "../../assets/Main/MainImg1.jpg";
import MainImg2 from "../../assets/Main/MainImg2.jpg";

import { useNavigate } from "react-router-dom";

// import tw, { css } from "twin.macro";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="NavBar"
        tw="z-50 fixed w-full top-0 flex justify-between "
      >
        <img src={Logo} />
        <button
          className="SignInBtn"
          tw="m-2 p-2 rounded-[0.5rem] bg-gray-400"
          onClick={() => navigate("/auth")}
        >
          로그인 버튼
        </button>
      </div>
      {/* 첫번째 페이지 */}
      <div tw="relative h-fit  min-w-[80rem] ">
        <div tw="absolute bottom-0">
          <p>빠르고</p>
          <p>간편하게</p>
          <div>똑똑</div>
        </div>
        <img src={MainImg1} tw="w-full" />
      </div>
      {/* 두번째 페이지 */}
      <div tw="relative h-fit  min-w-[80rem]">
        <div tw="absolute bottom-0">
          <p>서류 제출</p>
          <p>놓치지 말고</p>
          <div>똑똑</div>
        </div>
        <img src={MainImg2} tw="w-full " />
      </div>
      {/* 캐러셀 영역*/}
      <div>
        <div>
          <div> Intro-Page3-Text </div>
          <div> Intro-Page3-carousel </div>
          <div> Intro-Page3-Text </div>
        </div>
      </div>
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
