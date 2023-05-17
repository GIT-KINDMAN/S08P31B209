import { increment } from "@store/slice/addressListSlice";
import { addSend, delSend } from "@store/slice/imageViewSlice";
import type { RootState } from "@store/store";

import AddressList from "./AddressList";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

const EditorInvite = () => {
  const dispatch = useDispatch();

  const sendState = useSelector((state: RootState) => state.imageView.toSends);
  const addressListCount = useSelector(
    (state: RootState) => state.addressList.count,
  );

  const localDate = new Date();
  const authState = useSelector((state: RootState) => state.auth);

  const handleAddInviteBox = () => {
    dispatch(increment());
  };

  const addressListElements = Array.from(
    { length: addressListCount },
    (_, index) => (
      <AddressList
        key={index}
        index={index + 1}
        id={`searchQuery${index}`}
        authToken={authState.authToken}
      />
    ),
  );

  return (
    <>
      <div className="InviteForm" tw="flex flex-col px-4 bg-white">
        <div tw="flex justify-between">
          <div className="InviteCount" tw="py-4 text-xl font-bold">
            수신인원 {addressListCount}명
          </div>
        </div>
        {/* 수신인 추가 박스 */}
        <div className="InviteBoxWrap">
          {addressListElements}

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
