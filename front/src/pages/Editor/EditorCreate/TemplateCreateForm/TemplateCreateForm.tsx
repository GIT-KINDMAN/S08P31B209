import { Button, TextInput, Wrapper } from "@/components/atoms";
import { DropZone } from "@/components/molecules";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { ChangeEvent, useState } from "react";
import tw from "twin.macro";

const TemplateCreateForm = () => {
  // 파일 업로드, 삭제 관련
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    console.log("selectedFile : ", selectedFile);
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
      console.log("url : ", url);
      console.log("fileUrl", fileUrl);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
    setFileUrl(null);
  };

  const fileSize = file && Math.round(file.size / 1024);

  return (
    <>
      <div className="TemplateCreateForm">
        <Wrapper>
          <label tw="text-lg mx-2">템플릿 이름</label>
          <div className="CreateNameInput" tw="flex justify-center w-full">
            <TextInput
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <div
              className="InputField"
              tw="flex flex-col justify-center my-4 w-full"
            >
              <i className="fi fi-bs-pencil" tw="absolute z-20 mt-4" />
              <label tw=" ml-6 mt-1"> 문서 이름(기본값) </label>
              <input
                type="text"
                tw="px-6 border-b border-lightgray-500 outline-none relative"
                onChange={(e) => console.log(e.target.value)}
              ></input>
            </div>
          </div>
        </Wrapper>
        {/* 템플릿 업로드 박스 */}

        <Wrapper>
          <div className="UploadButtonWrap" tw="flex m-4 items-center">
            <label className="CreateNameTitle" tw="text-xl">
              문서업로드
            </label>
            <label
              htmlFor="file-input"
              tw="px-4 py-1 mx-2 border-2 border-blue-700 rounded-[4px] bg-blue-700 text-white text-sm font-bold"
            >
              <i className="fi fi-rs-upload" tw="mx-1 align-middle" />
              <input
                id="file-input"
                type="file"
                accept=".docx,.jpeg,.jpg,.png,.pdf"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
              Upload
            </label>
            <div
              className="DeleteButton"
              tw="px-4 py-1 mx-2 border-2 border-blue-700 rounded-[4px] bg-white text-blue-700 text-sm font-bold"
              // onClick -> 파일 업로드 취소
              onClick={handleFileDelete}
            >
              <i className="fi fi-rr-trash" tw="mx-1 align-middle" />
              Delete
            </div>
          </div>
          <DropZone></DropZone>
          <div
            className="uploadPreviewBox"
            tw="flex flex-col border-2 border-dashed text-center mx-14 my-4 p-4 rounded-2xl bg-lightgray-300 text-blue-600"
          >
            {file === null ? (
              <div>
                <p>
                  <i className="fi-rs-cloud-upload" /> upload할 파일(docs, pdf,
                  png, jpg)을
                </p>
                <p>여기에 끌어다 놓거나 또는 upload 버튼을 누르세요.</p>
              </div>
            ) : (
              <div>{fileUrl && <img src={fileUrl} alt="Uploaded file" />}</div>
            )}
            {file !== null ? (
              <div>
                <div className="FileName"> {file?.name}</div>
                <div className="FileSize"> {fileSize}KB</div>
              </div>
            ) : null}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default TemplateCreateForm;
