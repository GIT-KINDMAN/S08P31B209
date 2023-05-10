import "@flaticon/flaticon-uicons/css/all/all.css";
import { ChangeEvent, useState } from "react";
import "twin.macro";

const EditorCreate = () => {
  // 템플릿생성, 템플릿 불러오기
  const [isTemplate, setIsTemplate] = useState(true);

  // 템플릿 불러오기 -> 문서목록 드롭다운
  const [isDocsList, setIsDocsList] = useState(false);

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
      <div className="EditorCreate" tw="flex flex-col px-4 bg-white">
        <div
          className="CreateButtonWrap"
          tw="flex flex-row justify-center py-4"
        >
          <div tw="flex flex-row justify-center ">
            <button
              className="CreateTemplateBtn"
              tw=" m-2 p-2 w-[20rem]  rounded-[0.5rem] border-2 border-blue-600 text-blue-600 font-bold"
              onClick={() => setIsTemplate(true)}
            >
              템플릿 생성하기
            </button>
            <button
              className="LoadTemplateBtn"
              tw="m-2 p-2 w-[20rem]  rounded-[0.5rem] border-2 border-blue-600 text-blue-600 font-bold"
              onClick={() => setIsTemplate(false)}
            >
              템플릿 불러오기
            </button>
          </div>
        </div>
        {/* 템플릿 이름 설정 */}
        {/* 템플릿 생성 */}
        {isTemplate === true ? (
          <div className="TemplateCreateForm">
            <div
              className="CreateNameWrap"
              tw=" border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4"
            >
              <label className="CreateNameTitle" tw="text-xl mx-4 ">
                템플릿 이름
              </label>
              <div className="CreateNameInput" tw="flex justify-center">
                <div
                  className="InputField"
                  tw="flex flex-col justify-center  my-4"
                >
                  <i className="fi fi-bs-pencil" tw="absolute z-20 mt-4" />
                  <label tw=" ml-6 mt-1"> 문서 이름(기본값) </label>
                  <input
                    type="text"
                    tw="px-6 border-b border-lightgray-500 outline-none w-[39rem] relative"
                    onChange={(e) => console.log(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            {/* 템플릿 업로드 박스 */}
            <div
              className="UploadBoxWrap"
              tw="flex flex-col border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4 "
            >
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
              <div
                className="uploadPreviewBox"
                tw="flex flex-col border-2 border-dashed text-center mx-14 my-4 p-4 rounded-2xl bg-lightgray-300 text-blue-600"
              >
                {file === null ? (
                  <div>
                    <p>
                      <i className="fi-rs-cloud-upload" /> upload할 파일(docs,
                      pdf, png, jpg)을
                    </p>
                    <p>여기에 끌어다 놓거나 또는 upload 버튼을 누르세요.</p>
                  </div>
                ) : (
                  <div>
                    {fileUrl && <img src={fileUrl} alt="Uploaded file" />}
                  </div>
                )}
                {file !== null ? (
                  <div>
                    <div className="FileName"> {file?.name}</div>
                    <div className="FileSize"> {fileSize}KB</div>
                  </div>
                ) : null}
              </div>
            </div>{" "}
          </div>
        ) : null}

        {/* 템플릿 불러오기 */}
        {isTemplate === false ? (
          <div className="LoadTemplateForm">
            <div
              className="CreateNameWrap"
              tw=" border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4"
            >
              {/* <label className="CreateNameTitle" tw="text-xl mx-4 ">
                템플릿 선택
              </label> */}
              <div className="CreateNameInput" tw="flex justify-center">
                <div
                  className="InputField"
                  tw="flex flex-col justify-center  my-4"
                >
                  {/* <label tw=" ml-6 mt-1 "> 문서를 선택하세요 </label> */}
                  <input
                    type="text"
                    readOnly
                    placeholder="불러올 템플릿을 선택하세요"
                    tw="px-6 border-b border-lightgray-500 outline-none w-[39rem] relative"
                  />
                  <div
                    tw="text-end text-2xl border-2 cursor-pointer"
                    onClick={() => {
                      setIsDocsList(!isDocsList);
                    }}
                  >
                    <i className="fi fi-rs-caret-down" />
                  </div>
                  {isDocsList === true ? (
                    <div className="w-fit DocsList" tw="flex justify-center ">
                      <div tw=" border-b-2 border-dashed py-1 bg-white absolute overflow-y-auto font-bold">
                        <div
                          className="DocsName"
                          tw="mx-2 cursor-pointer"
                          onClick={() => setIsDocsList(false)}
                        >
                          삼성 청년
                        </div>
                        <hr />
                        <div
                          className="DocsName"
                          tw="mx-2 cursor-pointer"
                          onClick={() => setIsDocsList(false)}
                        >
                          삼성 청년 SW
                        </div>
                        <hr />
                        <div
                          className="DocsName"
                          tw="mx-2 cursor-pointer"
                          onClick={() => setIsDocsList(false)}
                        >
                          삼성 청년 SW 아카데미
                        </div>
                        <hr />
                        <div
                          className="DocsName"
                          tw="mx-2 cursor-pointer"
                          onClick={() => setIsDocsList(false)}
                        >
                          삼성 청년 SW 아카데미 결석
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* 템플릿 업로드 박스 */}
            <div
              className="UploadBoxWrap"
              tw="flex flex-col border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4 "
            >
              <div
                className="uploadPreviewBox"
                tw="flex flex-col border-2 border-dashed text-center mx-14 my-4 p-4 rounded-2xl bg-lightgray-300 text-blue-600"
              >
                <p>미리보기</p>

                <div className="FileName"> 파일 이름</div>
              </div>
            </div>{" "}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default EditorCreate;
