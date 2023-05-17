import { fetchEditorAddressList } from "@api/addressAPI";

import { addSend, delSend } from "@store/slice/imageViewSlice";
import type { RootState } from "@store/store";

import NameSearchList from "./NameSearchList";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

const EditorInvite = () => {
  const dispatch = useDispatch;
  const [isSearch, setIsSearch] = useState(false);
  const [isSelfDisable, setIsSelfDisable] = useState(true);
  const [inviteBoxes, setInviteBoxes] = useState([1]);
  const [deadline, setDeadline] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const localDate = new Date();
  const authState = useSelector((state: RootState) => state.auth);
  console.log(deadline);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery && authState.authToken) {
        const token = authState.authToken;
        try {
          const request = await fetchEditorAddressList(searchQuery, token);
          console.log(
            "이름을 포함하는 주소록 가져오기 성공",
            request.data.value.addresses,
          );
          setSearchResults(request.data.value.addresses);
        } catch (error) {
          console.error("주소록 가져오기 실패", error);
        }
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddInviteBox = () => {
    setInviteBoxes([...inviteBoxes, inviteBoxes.length + 1]);
  };

  return (
    <>
      <div
        className="InviteForm"
        tw="flex flex-col px-4 bg-white"
        onBlur={() => setIsSearch(false)}
      >
        <div tw="flex justify-between">
          <div className="InviteCount" tw="py-4 text-xl font-bold">
            수신인원 {inviteBoxes.length}명
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
          {inviteBoxes.map((inviteBox, index) => (
            <div
              key={inviteBox}
              className="InviteBox"
              tw="flex flex-col border-2 border-lightgray-500 rounded-[16px] pb-4 mb-6"
            >
              <span className="InviteNumber" tw="px-4 my-2">
                {index + 1}
              </span>
              <input
                className="InviteNameInput"
                tw="w-96 border border-lightgray-500 mx-4 my-3 px-4 text-xl"
                placeholder="이름"
                required={true}
                list="searchQuery"
                onChange={handleNameInputChange}
              />
              <NameSearchList id="searchQuery" searchResults={searchResults} />
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
                  {" "}
                  직접 입력할게요
                </span>
              </div>
            </div>
          ))}

          {/* 추가 버튼 */}
          <div className="AddInviteWrap" tw="flex justify-center">
            <button
              className="AddInviteBox"
              tw="border-2 border-orange-600 rounded-[8px] mb-8 px-2 py-1"
              onClick={handleAddInviteBox}
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
