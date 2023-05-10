import "@flaticon/flaticon-uicons/css/all/all.css";
import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const Editor = () => {
  const navigate = useNavigate();
  // Redux Step 관리
  const nextStep = () => {
    return console.log("Call nextStep()");
  };

  return (
    <>
      <div>
        <div
          className="EditorHeader"
          tw="z-50 fixed w-full top-0 flex justify-between bg-blue-800 px-4 py-2 h-[3rem]"
        >
          <div className="Title">
            <label tw="text-2xl font-bold text-sliver-100">
              제목(states로 step 별 변경 )
            </label>
          </div>
          <div
            className="Progressbar"
            tw="flex justify-around items-center rounded-[2rem] bg-lightgray-50 px-6"
          >
            <div className="ProgressbarItem">
              <label tw="text-sm font-bold text-orange-800">템플릿 선택</label>
            </div>
            <div className="ProgressSep" tw="mx-2">
              <i className="fi fi-bs-angle-right"></i>
            </div>
            <div className="ProgressbarItem">
              <label tw="text-sm">템플릿 편집</label>
            </div>
            <div className="ProgressSep" tw="mx-2">
              <i className="fi fi-bs-angle-right"></i>
            </div>
            <div className="ProgressbarItem">
              <label tw="text-sm">연락처 추가</label>
            </div>
            <div className="ProgressSep" tw="mx-2">
              <i className="fi fi-bs-angle-right"></i>
            </div>
            <div className="ProgressbarItem">
              <label tw="text-sm">완료</label>
            </div>
          </div>
        </div>
        <div className="Packing" tw="flex min-h-screen pt-[3rem] pb-[4rem]">
          <div
            className="ContentWrap"
            tw="flex w-full justify-center bg-lightgray-800"
          >
            <Outlet />
          </div>
        </div>
        <div
          className="NavButtonWrap"
          tw="z-50 fixed w-full bottom-0 flex flex-row justify-center bg-blue-800 px-4 h-[4rem]"
        >
          <div tw="flex flex-row justify-center w-[43rem]">
            <button
              className="LoginBtn"
              tw="m-2 p-2 w-full rounded-[0.5rem] bg-lightgray-50 border-2 border-orange-600 font-bold"
              onClick={() => navigate(-1)}
            >
              이&nbsp;&nbsp;전
            </button>
            <button
              className="SignUpBtn"
              tw="m-2 p-2 w-full rounded-[0.5rem] bg-orange-600 font-bold"
              onClick={() => nextStep()}
            >
              다&nbsp;&nbsp;음
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
