import { addSend } from "@store/slice/imageViewSlice";
import type { RootState } from "@store/store";

import AddressList from "./AddressList";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

const EditorInvite = () => {
  const dispatch = useDispatch();

  const sendState = useSelector((state: RootState) => state.imageView.sends);

  let index = 1;
  return (
    <>
      <div
        className="InviteForm"
        tw="flex flex-col px-4 bg-white min-w-[30rem]"
      >
        <div tw="flex justify-between">
          <div className="InviteCount" tw="py-4 text-xl font-bold">
            수신인원 {sendState.length}명
          </div>
        </div>
        {/* 수신인 추가 박스 */}
        <div className="InviteBoxWrap">
          {sendState.map((send) => (
            <AddressList key={send.idx} index={index++} idx={send.idx} />
          ))}
          {/* 추가 버튼 */}
          <div className="AddInviteWrap" tw="flex justify-center">
            <button
              className="AddInviteBox"
              tw="border-2 border-orange-600 rounded-[8px] mb-8 px-2 py-1"
              onClick={() => {
                dispatch(
                  addSend({
                    idx: Math.random().toString(36),
                  }),
                );
              }}
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
