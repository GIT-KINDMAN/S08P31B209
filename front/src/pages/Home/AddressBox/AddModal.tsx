// import styled from "styled-components";
import type { RootState } from "@store/store";

import { saveAddress } from "@/apis/addressAPI";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "twin.macro";

interface ModalDefaultType {
  handleToggleModal: () => void;
}

const Modal = ({ handleToggleModal }: ModalDefaultType) => {
  const authState = useSelector((state: RootState) => state.auth);

  const [addName, setAddName] = useState("");
  const [addEmail, setaddEmail] = useState("");
  const [addPhone, setAddPhone] = useState("");
  const [addGroup, setAddGroup] = useState("");
  const [addPosition, setAddPosition] = useState("");
  const [isOptionalInfo, setIsOptionalInfo] = useState(false);

  const addnewaddress = () => {
    if (authState.authToken) {
      const token = authState.authToken;

      saveAddress(addName, addEmail, addPhone, addGroup, addPosition, token)
        .then((request) => {
          console.log(request.data);
        })
        .catch((e) => console.log(e));
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className="ModalContainer"
      tw="w-fit h-full flex items-center justify-center fixed   overflow-y-scroll"
    >
      {/* <div onClick={() => handleToggleModal()}>X</div> */}
      <div
        className="Dialog"
        tw="min-w-[50rem] max-w-[50rem] min-h-[25rem] max-h-[25rem] flex flex-col border-2 border-black rounded-[16px] py-4  bg-white z-[1000] overflow-y-scroll"
      >
        <div tw="flex justify-between">
          <div tw="text-2xl m-2">주소록 추가</div>
          <div tw="p-4 mx-4" onClick={handleToggleModal}>
            <i className="fi fi-rr-cross" />
          </div>
        </div>
        <span tw="ml-12 text-xl font-bold">필수 정보</span>
        <div
          className="requiredInfo"
          tw="ml-12 text-xl font-bold flex flex-col"
        >
          <div className="UserName" tw="ml-40 px-9 py-4 font-medium">
            이름
            <input
              type="text"
              tw="border-2 ml-4 px-2 py-1 text-base"
              onChange={(e) => setAddName(e.target.value)}
            />
          </div>
          <div className="UserName" tw="ml-40 px-4 font-medium">
            이메일
            <input
              type="text"
              tw="border-2 ml-4 px-2 py-1 text-base"
              onChange={(e) => setaddEmail(e.target.value)}
            />
          </div>
        </div>
        <hr tw="my-4" />
        <div tw="flex flex-col justify-center">
          <button onClick={() => setIsOptionalInfo(!isOptionalInfo)}>
            {isOptionalInfo === false ? (
              <div tw="border-2 w-[12rem] h-fit  rounded-[16px] mx-auto">
                부가 정보 입력
              </div>
            ) : (
              <div tw="border-2 w-[4rem] h-fit  rounded-full mx-auto">접기</div>
            )}
          </button>

          {isOptionalInfo === true ? (
            <div>
              <span tw="ml-12 text-xl font-bold">부가 정보</span>
              <div
                className="OptionalInfo"
                tw=" text-xl font-bold flex flex-col text-center"
              >
                <div className="UserPhone" tw=" pt-4 pb-2 font-medium">
                  연락처
                  <input
                    type="text"
                    tw="border-2 ml-4 px-2 py-1 text-base"
                    onChange={(e) => setAddPhone(e.target.value)}
                  />
                </div>
                <div className="UserGroup" tw=" py-2 font-medium">
                  소속
                  <input
                    type="text"
                    tw="border-2 ml-4 px-2 py-1 text-base"
                    onChange={(e) => setAddGroup(e.target.value)}
                  />
                </div>
                <div className="UserGroup" tw=" py-2 font-medium">
                  직책
                  <input
                    type="text"
                    tw="border-2 ml-4 px-2 py-1 text-base"
                    onChange={(e) => setAddPosition(e.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          tw="border-2 text-center w-fit px-40 py-1 rounded-[4px] mx-auto my-auto"
          onClick={(e) => {
            addnewaddress();
            e.preventDefault();
            if (handleToggleModal) {
              handleToggleModal();
            }
          }}
        >
          등록
        </button>
      </div>
      <div
        tw="min-w-[100rem] max-w-fit h-full fixed top-0 z-[999] bg-black opacity-60"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (handleToggleModal) {
            handleToggleModal();

            navigate("/home/address");
          }
        }}
      />
    </div>
  );
};

export default Modal;

// const ModalContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
// `;

// const DialogBox = styled.dialog`
//   min-width: 800px;
//   max-width: 800px;
//   min-height: 400px;
//   max-height: 400px;
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   border: solid 1px black;
//   border-radius: 3px;
//   box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
//   box-sizing: border-box;
//   background-color: white;
//   z-index: 10000;
//   overflow-y: scroll;
// `;

// const Backdrop = styled.div`
//   min-width: 100%;
//   max-width: fit-content;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
//   background-color: rgba(0, 0, 0, 0.2);
// `;
