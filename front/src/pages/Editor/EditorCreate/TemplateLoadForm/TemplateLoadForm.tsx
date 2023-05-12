import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
import "twin.macro";

const TemplateLoadForm = () => {
  // 템플릿 불러오기 -> 문서목록 드롭다운
  const [isDocsList, setIsDocsList] = useState(false);

  return (
    <>
      <div className="LoadTemplateForm">
        <div
          className="CreateNameWrap"
          tw=" border-2 border-lightgray-500 w-[42rem] rounded-[4px] my-4"
        >
          {/* <label className="CreateNameTitle" tw="text-xl mx-4 ">
                템플릿 선택
              </label> */}
          <div className="CreateNameInput" tw="flex justify-center">
            <div className="InputField" tw="flex flex-col justify-center  my-4">
              {/* <label tw=" ml-6 mt-1 "> 문서를 선택하세요 </label> */}

              <select
                tw="text-start text-2xl border-2 px-6 cursor-pointer min-w-[39rem]"
                onClick={() => {
                  setIsDocsList(!isDocsList);
                }}
              >
                <option
                  value="List 1"
                  tw="mx-2 cursor-pointer"
                  onClick={() => setIsDocsList(false)}
                >
                  삼성 청년
                </option>
                <hr />
                <option
                  value="List 2"
                  tw="mx-2 cursor-pointer"
                  onClick={() => setIsDocsList(false)}
                >
                  삼성 청년 SW
                </option>
                <hr />
                <option
                  value="List 3"
                  tw="mx-2 cursor-pointer"
                  onClick={() => setIsDocsList(false)}
                >
                  삼성 청년 SW 아카데미
                </option>
                <hr />
                <option
                  value="List 4"
                  tw="mx-2 cursor-pointer"
                  onClick={() => setIsDocsList(false)}
                >
                  삼성 청년 SW 아카데미 결석
                </option>
              </select>
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
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default TemplateLoadForm;
