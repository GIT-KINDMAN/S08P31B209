import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
import "twin.macro";

const EditorInvite = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isSelfDisable, setIsSelfDisable] = useState(true);

  const [deadline, setDeadline] = useState("");
  const localDate = new Date();
  return (
    <>
      <div
        className="InviteForm"
        tw="flex flex-col px-4 bg-white"
        onBlur={() => setIsSearch(false)}
      >
        <div tw="flex justify-between">
          <div className="InviteCount" tw="py-4 text-xl font-bold">
            수신인원 ??명
          </div>
          <div className="SetDeadline" tw="py-4 text-base ">
            <span className="DeadlineLabel" tw="font-bold">
              문서 마감일 설정
            </span>
            <div>
              <input
                type="radio"
                name="deadline"
                tw="mx-2"
                onChange={(e) => console.log(e.target.value)}
              />
              <span> 해당없음 </span>
            </div>
            <div>
              <input type="radio" tw="mx-2" name="deadline" />
              <input
                type="date"
                tw="border-2 px-2"
                min={localDate.toISOString().split("T")[0]}
                defaultValue={localDate.toISOString().split("T")[0]}
                onKeyDown={(e) => e.preventDefault()}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* 수신인 추가 박스 */}
        <div className="InviteBoxWrap">
          <div
            className="InviteBox"
            tw="flex flex-col border-2 border-lightgray-500 rounded-[16px] pb-4 mb-6"
          >
            <span className="InviteNumber" tw="px-4 my-2">
              1
            </span>
            <div>
              <input
                className="InviteNameInput"
                tw="w-96 border border-lightgray-500 mx-4 my-3 px-4 text-xl"
                placeholder="이름"
                required={true}
                onClick={() => setIsSearch(!isSearch)}
              />

              {/* 클릭시 검색목록 출력 */}
              {isSearch === true ? (
                <div
                  className="SearchList"
                  tw="flex flex-col h-10 scale-110 bg-white absolute overflow-y-auto justify-center font-bold"
                >
                  <div
                    tw="flex justify-center border-b-2 border-dashed py-1"
                    onClick={() => setIsSearch(false)}
                  >
                    <div className="SearchName" tw="mx-2">
                      홍길동
                    </div>
                    <div className="SearchEmail" tw="mx-2">
                      gildong@naver.com
                    </div>
                    <div className="SearchPhone" tw="mx-2">
                      010-1234-5678
                    </div>
                    <div className="SearchGender" tw="mx-2">
                      남성
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <input
              className="InviteEmailInput"
              tw="w-96 border border-lightgray-500 mx-4 my-3 px-4 text-xl"
              placeholder="Email"
              required={true}
            />
            <div tw="flex justify-around">
              <input
                className="InvitePhoneTag"
                tw="w-44 border border-lightgray-500   my-3 px-4 text-xl"
                placeholder="연락처"
                disabled={isSelfDisable}
              />
              <input
                className="InviteGenderTag"
                tw="w-44 border border-lightgray-500 my-3 px-4 text-xl"
                placeholder="소속"
                disabled={isSelfDisable}
              />
            </div>
            <div className="InviteCheckBox" tw="mx-4 align-middle">
              <input
                type="checkbox"
                onClick={() => setIsSelfDisable(!isSelfDisable)}
              />
              <span tw="text-xs relative bottom-0.5 font-bold">
                직접 입력할게요
              </span>
            </div>
          </div>

          {/* 추가 버튼 */}
          <div className="AddInviteWrap" tw="flex justify-center">
            <button
              className="AddInviteBox"
              tw="border-2 border-orange-600 rounded-[8px] mb-8 px-2 py-1 "
            >
              <i className="fi fi-rr-plus" tw="text-lightgray-600" />
              <span tw="ml-1 text-xl text-lightgray-600">추가</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorInvite;
