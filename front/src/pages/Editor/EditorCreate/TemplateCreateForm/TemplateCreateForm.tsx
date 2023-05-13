import { Button, Icon, TextInput, Wrapper } from "@atomic/atoms";

import {
  fileDelete,
  fileUpload,
  setMetaDocName,
} from "@store/slice/metaDocSlice";
import type { RootState } from "@store/store";

import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";

const TemplateCreateForm = () => {
  // 파일 업로드, 삭제 관련
  const dispatch = useDispatch();
  const metaDocState = useSelector((state: RootState) => state.metaDoc);
  const fileState = useSelector((state: RootState) => state.metaDoc.file);

  const fileSize =
    fileState &&
    (fileState.file.size / 1024 / 1024 > 1
      ? Math.ceil(fileState.file.size / 1024 / 1024) + "MB"
      : Math.ceil(fileState.file.size / 1024) + "KB");

  return (
    <>
      <div className="TemplateCreateForm">
        <Wrapper custom={tw`min-h-[8rem]`}>
          <label tw="mx-2 mb-4 text-lg font-bold text-lightgray-700">
            템플릿 이름
          </label>
          <div tw="flex justify-center w-full">
            {/* 해당부분 코드를 나중에 적절한 molecule을 만들어 수정해야함 */}
            <TextInput
              custom={tw`mx-2`}
              placeholder="새 템플릿의 이름을 작성해 주세요."
              onChange={(e) => dispatch(setMetaDocName(e.target.value))}
              value={metaDocState.name}
            />
          </div>
        </Wrapper>
        {/* 템플릿 업로드 박스 */}

        <Wrapper>
          <label tw="mx-2 mb-4 text-lg font-bold text-lightgray-700">
            문서 업로드
          </label>

          {fileState === null ? (
            <Dropzone
              multiple={false}
              onDrop={(acceptedFiles) => dispatch(fileUpload(acceptedFiles[0]))}
            >
              {({ getRootProps, getInputProps }) => (
                <Wrapper
                  custom={tw`border-dashed text-base text-center items-center my-4 border-blue-600 bg-lightgray-300 text-blue-600`}
                >
                  <div {...getRootProps()} tw="w-full h-full">
                    <input {...getInputProps()} />
                    <p>
                      <Icon
                        icon="fi-rs-cloud-upload"
                        size="xs"
                        custom={tw`mx-1`}
                      />
                      upload할 파일(docs, pdf, png, jpg)을
                    </p>
                    <p>
                      여기에 끌어다 놓거나 또는 아래의 upload 버튼을 누르세요.
                    </p>
                    <Button
                      fontSize="md"
                      isBold={true}
                      custom={tw`mt-2 px-4 bg-blue-700 text-white rounded-[0.25rem] hocus:(scale-[97%] bg-blue-400)`}
                    >
                      <Icon icon="fi-rs-upload" size="xs" custom={tw`mx-1`} />
                      <label>Upload</label>
                    </Button>
                  </div>
                </Wrapper>
              )}
            </Dropzone>
          ) : (
            <section>
              <Wrapper
                custom={tw`border-dashed text-base text-center items-center my-4 border-blue-600 bg-lightgray-300 text-blue-600`}
              >
                <img
                  src={fileState.fileUrl ?? "미리보기 없음.png"}
                  alt="Uploaded file"
                  tw="rounded-[0.5rem]"
                  onClick={() => console.log(fileState)}
                />
                <div>
                  <p>
                    {fileState.file?.name}
                    <Icon
                      icon="fi-bs-cross-small"
                      size="xs"
                      custom={tw`mx-1`}
                      onClick={() => dispatch(fileDelete())}
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
