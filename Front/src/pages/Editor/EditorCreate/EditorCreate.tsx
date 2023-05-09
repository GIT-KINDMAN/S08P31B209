import "@flaticon/flaticon-uicons/css/all/all.css";
import "twin.macro";

const EditorCreate = () => {
  const createTemplate = () => console.log("CreateTemplate");
  const loadTemplate = () => console.log("LoadTemplate");

  const fileUpload = () => console.log("FileUpload");
  const fileDelete = () => console.log("FileDelete");

  return (
    <div className="EditorCreate">
      <div className="CreateButtonWrap" tw="flex flex-row justify-center py-4">
        <div tw="flex flex-row justify-center ">
          <button
            className="CreateTemplateBtn"
            tw=" m-2 p-2 w-[20rem]  rounded-[0.5rem] border-2 border-blue-600 text-blue-600 font-bold"
            onClick={() => createTemplate()}
          >
            템플릿 생성하기
          </button>
          <button
            className="LoadTemplateBtn"
            tw="m-2 p-2 w-[20rem]  rounded-[0.5rem] border-2 border-blue-600 text-blue-600 font-bold"
            onClick={() => loadTemplate()}
          >
            템플릿 불러오기
          </button>
        </div>
      </div>
      {/* 템플릿 이름 설정 */}
      <div
        className="CreateNameWrap"
        tw=" border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4"
      >
        <label className="CreateNameTitle" tw="text-xl mx-4 ">
          템플릿 이름
        </label>
        <div className="CreateNameInput" tw="flex justify-center">
          <div className="InputField" tw="flex flex-col justify-center  my-4">
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
          <div
            className="UploadButton"
            tw="px-4 py-1 mx-2 border-2 border-blue-700 rounded-[4px] bg-blue-700 text-white text-sm font-bold "
            // onClick -> 파일 추가
            onClick={() => fileUpload()}
          >
            <i className="fi fi-rs-upload" tw="mx-1 align-middle" />
            upload
          </div>
          <div
            className="DeleteButton"
            tw="px-4 py-1 mx-2 border-2 border-blue-700 rounded-[4px] bg-white text-blue-700 text-sm font-bold"
            // onClick -> 파일 업로드 취소
            onClick={() => fileDelete()}
          >
            <i className="fi fi-rr-trash" tw="mx-1 align-middle" />
            Delete
          </div>
        </div>
        <div
          className="uploadPreviewBox"
          tw="flex flex-col border-2 border-dashed text-center mx-14 my-4 p-4 rounded-2xl bg-lightgray-300 text-blue-600"
        >
          <p>
            <i className="fi-rs-cloud-upload" /> upload할 파일(docs, pdf, png,
            jpg)을
          </p>
          <p>여기에 끌어다 놓거나 또는 upload 버튼을 누르세요.</p>
          <div className="FileName"> 파일 이름</div>
          <div className="FileSize"> 1239KB</div>
        </div>
      </div>
    </div>
  );
};

export default EditorCreate;
