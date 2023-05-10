import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import "twin.macro";

interface ModalDefaultType {
  handelToggleModal: () => void;
}

const Modal = ({ handelToggleModal }: ModalDefaultType) => {
  return (
    <ModalContainer>
      <DialogBox>
        <div tw="text-2xl m-2">주소록 추가</div>
        <span tw="ml-12 text-xl font-bold">필수 정보</span>
        <div
          className="requiredInfo"
          tw="ml-12 text-xl font-bold flex flex-col"
        >
          <div className="UserName" tw="ml-40 px-9 py-4 font-medium">
            이름
            <input type="text" tw="border-2 ml-4 px-2 py-1 text-base" />
          </div>
          <div className="UserName" tw="ml-40 px-4 font-medium">
            이메일
            <input type="text" tw="border-2 ml-4 px-2 py-1 text-base" />
          </div>
        </div>
      </DialogBox>
      <div
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (handelToggleModal) {
            handelToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  min-width: 800px;
  max-width: 800px;
  min-height: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: solid 1px black;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  overflow-y: scroll;
`;

// const Backdrop = styled.div`
//   min-width: 100%;
//   max-width: fit-content;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
//   background-color: rgba(0, 0, 0, 0.2);
// `;
