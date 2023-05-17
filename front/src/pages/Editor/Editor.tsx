import { Button, Icon, Label } from "@atomic/atoms";

import { moveNext, movePrev } from "@store/slice/editStepSlice";
import type { RootState } from "@store/store";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import tw from "twin.macro";

const stepLink = [
  "/error",
  "/editor/create",
  "/editor/edit",
  "/editor/invite",
  "/editor/finish",
  "/home",
];
const stepTitle = [
  "unknown",
  "템플릿 생성",
  "템플릿 편집기",
  "연락처 추가",
  "작성 완료",
  "unknown",
];

const Editor = () => {
  const editStepState = useSelector((state: RootState) => state.editStep);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = () => {
    dispatch(moveNext());
    navigate(stepLink[editStepState.step + 1]);
    console.log(navigate);
  };

  const prevStep = () => {
    dispatch(movePrev());
    navigate(-1);
    console.log(navigate);
  };

  return (
    <>
      <div tw="min-w-[64rem]">
        <div
          className="EditorHeader"
          tw="z-50 fixed w-full min-w-[64rem] top-0 flex justify-between bg-blue-800 px-4 py-2 h-[3rem]"
        >
          <div className="Title">
            <label tw="text-2xl font-bold text-sliver-100">
              {stepTitle[editStepState.step]}
            </label>
          </div>
          <div
            className="Progressbar"
            tw="flex justify-around items-center rounded-[2rem] bg-lightgray-50 px-6"
          >
            <Label
              text="템플릿 선택"
              fontSize="sm"
              isBold={true}
              custom={
                editStepState.step === 1
                  ? tw`transition duration-300 text-orange-500`
                  : tw`transition duration-300`
              }
            />
            <Icon icon="fi-rs-angle-small-right" size="sm" custom={tw`mt-1`} />
            <Label
              text="템플릿 편집"
              fontSize="sm"
              isBold={true}
              custom={
                editStepState.step === 2
                  ? tw`transition duration-300 text-orange-500`
                  : tw`transition duration-300`
              }
            />
            <Icon icon="fi-rs-angle-small-right" size="sm" custom={tw`mt-1`} />
            <Label
              text="연락처 추가"
              fontSize="sm"
              isBold={true}
              custom={
                editStepState.step === 3
                  ? tw`transition duration-300 text-orange-500`
                  : tw`transition duration-300`
              }
            />
            <Icon icon="fi-rs-angle-small-right" size="sm" custom={tw`mt-1`} />
            <Label
              text="완료"
              fontSize="sm"
              isBold={true}
              custom={
                editStepState.step === 4
                  ? tw`transition duration-300 text-orange-500`
                  : tw`transition duration-300`
              }
            />
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
          tw="z-50 fixed bottom-0 flex flex-row justify-center min-w-[64rem] w-full h-[4rem] px-4 bg-blue-800"
        >
          <div tw="flex flex-row min-w-[40rem] max-w-[40rem] justify-center py-2">
            <Button
              variant="secondary"
              isBold={true}
              isOutline={true}
              custom={tw`w-full h-full mx-1 py-3 bg-white hocus:(scale-100)`}
              onClick={() => prevStep()}
            >
              이&nbsp;&nbsp;전
            </Button>
            <Button
              variant="secondary"
              isBold={true}
              custom={tw`w-full h-full mx-1 py-3 hocus:(scale-100)`}
              onClick={() => nextStep()}
            >
              다&nbsp;&nbsp;음
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
