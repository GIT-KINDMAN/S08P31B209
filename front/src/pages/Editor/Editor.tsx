import { Button, Icon, Label } from "@atomic/atoms";

import { moveNext, movePrev } from "@store/slice/editStepSlice";
import type { RootState } from "@store/store";

import { templateSave } from "@/apis/templateAPI";
import {
  fileState,
  templateSaveState,
  viewState,
} from "@/store/slice/imageViewSlice";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect } from "react";
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

// const dataURLtoBlob = (dataURL: string): Blob => {
//   const byteString = window.atob(dataURL.split(",")[1]);
//   const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
//   const arrayBuffer = new ArrayBuffer(byteString.length);
//   const ia = new Uint8Array(arrayBuffer);

//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }

//   const blob = new Blob([arrayBuffer], { type: mimeString });
//   return blob;
// };

const Editor = () => {
  const editStepState = useSelector((state: RootState) => state.editStep);
  const authToken = useSelector((state: RootState) => state.auth.authToken);
  const imageView = useSelector((state: RootState) => state.imageView);

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

  const mapImageViewToTemplateSaveState = (
    imageView: viewState,
  ): templateSaveState => {
    return {
      toEmailNameReqDTO: imageView.sends,
      templateDeadline: imageView.deadLine.toISOString(),
      templateName: imageView.name,
      widgetResDTO: imageView.widgets,
      file: imageView.file as fileState,
    };
  };

  useEffect(() => {
    if (editStepState.step === 4 && imageView.file !== null) {
      console.log("템플릿 저장 및 이메일 전송");
      const mappedData = mapImageViewToTemplateSaveState(imageView);
      templateSave(mappedData, authToken ?? "").then((request) => {
        console.log("템플릿 저장완료", request.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editStepState]);

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
