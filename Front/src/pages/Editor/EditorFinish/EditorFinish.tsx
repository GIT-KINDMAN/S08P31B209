import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
import "twin.macro";

const EditorFinish = () => {
  return (
    <div className="EditorFinish" tw="flex flex-col bg-white px-4 ">
      <div tw="flex mt-10">
        <div
          className="LinkWrap"
          tw="flex border-2 border-blue-200 px-4 py-2 mx-4 rounded-[16px]"
        >
          <div className="LinkLabel" tw="align-middle text-xl">
            <p tw="font-bold text-blue-200 border-r-2 px-2">Docs Link</p>
          </div>
          <input
            type="url"
            name="DocsLink"
            disabled
            readOnly
            value={"www.naver.com"}
            tw="text-xl mx-4"
          />
        </div>
        <button tw=" px-4 py-2 mx-2 rounded-[16px] bg-green-200">
          <i className="fi fi-br-link" tw=" text-blue-500 text-2xl" />
        </button>
      </div>
      <div className="FinishWrap" tw="flex flex-col text-center mt-10">
        <div className="FinishTitle" tw=" p-2">
          <p tw="text-xl">
            <span tw="text-2xl font-bold text-orange-800">13?</span>명의
            수신자에게 문서를 전송합니다.
          </p>
          <p tw="text-lg"> 문서 전송 뒤엔 취소할 수 없습니다.</p>
        </div>
        <div className="AddAddress" tw="flex justify-center">
          <input type="checkbox" />
          <span tw="text-xs ml-2">신규 수신자들을 내 주소록에 추가합니다.</span>
        </div>
      </div>
    </div>
  );
};

export default EditorFinish;
