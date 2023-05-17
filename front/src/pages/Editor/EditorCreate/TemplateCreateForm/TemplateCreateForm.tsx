import { Button, Icon, TextInput, Wrapper } from "@atomic/atoms";

import { setFile, setName } from "@store/slice/imageViewSlice";
import type { RootState } from "@store/store";

import Dropzone from "./DropZone";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";

const TemplateCreateForm = () => {
  const dispatch = useDispatch();
  const metaDocState = useSelector((state: RootState) => state.imageView);
  const fileState = useSelector((state: RootState) => state.imageView.file);

  const canvasFrameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fileSize =
    fileState &&
    (fileState.size / 1024 / 1024 > 1
      ? Math.ceil(fileState.size / 1024 / 1024) + "MB"
      : Math.ceil(fileState.size / 1024) + "KB");

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (fileState) {
      const img = new Image();
      img.src = fileState.data;
      img.onload = () => {
        const width =
          img.width < img.height
            ? img.width / (img.height / (canvas?.height ?? 0))
            : canvas?.width ?? 0;
        const height =
          img.height <= img.width
            ? img.height / (img.width / (canvas?.width ?? 0))
            : canvas?.height ?? 0;
        context?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
        context?.drawImage(
          img,
          ((canvas?.width ?? 0) - width) / 2,
          ((canvas?.height ?? 0) - height) / 2,
          width,
          height,
        );
      };
    }
  }, [fileState]);

  return (
    <>
      <div className="TemplateCreateForm">
        {/* 템플릿 이름 설정 */}
        <Wrapper custom={tw`min-h-[8rem]`}>
          <label tw="mx-2 mb-4 text-lg font-bold text-lightgray-700">
            템플릿 이름
          </label>
          <div tw="flex justify-center w-full">
            {/* 해당부분 코드를 나중에 적절한 molecule을 만들어 수정해야함 */}
            <TextInput
              custom={tw`mx-2`}
              placeholder="새 템플릿의 이름을 작성해 주세요."
              onChange={(e) => dispatch(setName(e.target.value))}
              value={metaDocState.name}
            />
          </div>
        </Wrapper>

        {/* 템플릿 문서 업로드 박스 */}
        <Wrapper>
          <label tw="mx-2 mb-4 text-lg font-bold text-lightgray-700">
            문서 업로드
          </label>

          {fileState === null ? (
            <Wrapper
              custom={tw`border-dashed text-base text-center items-center my-4 border-blue-600 bg-lightgray-300 text-blue-600`}
            >
              <Dropzone>
                <p>
                  <Icon icon="fi-rs-cloud-upload" size="xs" custom={tw`mx-1`} />
                  upload할 파일(docs, pdf, png, jpg)을
                </p>
                <p>여기에 끌어다 놓거나 또는 아래의 upload 버튼을 누르세요.</p>
                <Button
                  fontSize="md"
                  isBold={true}
                  custom={tw`mt-2 px-4 bg-blue-700 text-white rounded-[0.25rem] hocus:(scale-[97%] bg-blue-400)`}
                >
                  <Icon icon="fi-rs-upload" size="xs" custom={tw`mx-1`} />
                  <label>Upload</label>
                </Button>
              </Dropzone>
            </Wrapper>
          ) : (
            <section>
              <Wrapper
                custom={tw`border-dashed text-base text-center items-center my-4 border-blue-600 bg-lightgray-300 text-blue-600`}
              >
                <div tw="flex justify-center w-full h-full">
                  <canvas
                    ref={canvasRef}
                    width={200}
                    height={300}
                    tw="bg-lightgray-200 rounded-[0.5rem]"
                  />
                </div>
                <div>
                  <p>
                    {fileState.name}
                    <Icon
                      icon="fi-bs-cross-small"
                      size="xs"
                      custom={tw`mx-1`}
                      onClick={() => dispatch(setFile(null))}
                    />
                  </p>
                  <div className="FileSize"> {fileSize} </div>
                </div>
              </Wrapper>
            </section>
          )}
        </Wrapper>
      </div>
    </>
  );
};

export default TemplateCreateForm;
