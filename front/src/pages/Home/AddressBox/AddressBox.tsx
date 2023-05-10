import AddModal from "./AddModal";

import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
import "twin.macro";

const AddressBox = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handelToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <div tw=" bg-white w-full h-full flex flex-col">
        <header
          className="AddressHeader"
          tw="border-b-2 text-2xl font-bold py-2 mx-6"
        >
          주소록 관리
        </header>
        <div className="AddressForm" tw="flex text-center w-[60rem] ">
          <div tw="flex flex-col   min-w-[18rem] max-w-[18rem] mx-auto">
            {/* 그룹명 부분 */}
            <div className="GroupWrap" tw="text-xl font-bold my-4">
              그룹 보기
            </div>

            <div
              className="GroupsBox"
              tw="border-2 text-start min-h-[30rem] max-h-[30rem] text-xl overflow-y-scroll"
            >
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2">
                전체보기
              </div>
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2">
                그룹없음
              </div>
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2 ">
                서울 1반
              </div>
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2">
                서울 2반
              </div>
            </div>
          </div>

          {/* 그룹별 그룹원 부분 */}
          <div tw="flex flex-col   min-w-[40rem] max-w-[32rem] mx-auto">
            <div
              className="MemberWrap"
              tw="flex text-xl font-bold my-4 ml-8 justify-between"
            >
              <div>그룹원 보기</div>
              <div tw=" text-sm pt-2" onClick={() => handelToggleModal()}>
                주소록 추가 <i className="fi fi-br-plus-small" />
              </div>
            </div>
            <div
              className="MembersBox"
              tw="border-2 text-center min-w-[54rem]  min-h-[30rem] max-h-[30rem] text-xl overflow-y-scroll"
            >
              <div
                className="MemberHeader"
                tw="border-b border-b-2 px-8 my-2 flex justify-between px-4"
              >
                <div tw="py-4 min-w-[10rem] max-w-[10rem] break-words ">
                  이름
                </div>
                <div tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  조직
                </div>
                <div tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  이메일
                </div>
                <div tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  전화번호
                </div>
                <div tw="py-4  max-w-[10rem] break-words"></div>
              </div>
              <ul
                className="MemberItem"
                tw="text-sm border-b border-dashed  my-2 flex justify-around"
              >
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  홍길동
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  대전 1반
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  gindong123@naver.com
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  010-1234-5678
                </li>
                <li tw="py-4">
                  <i className="fi fi-br-menu-dots" />
                </li>
              </ul>
              <ul
                className="MemberItem"
                tw="text-sm border-b border-dashed  my-2 flex justify-around"
              >
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  홍길동
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  대전 1반
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words break-words">
                  gindong123@naver.com
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words break-words">
                  010-1234-5678
                </li>
                <li tw="py-4">
                  <i className="fi fi-br-menu-dots" />
                </li>
              </ul>
              <ul
                className="MemberItem"
                tw="text-sm border-b border-dashed  my-2 flex justify-around"
              >
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  홍길동
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  대전 1반
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  gindong123@naver.com
                </li>
                <li tw="py-4 min-w-[10rem] max-w-[10rem] break-words">
                  010-1234-5678
                </li>
                <li tw="py-4">
                  <i className="fi fi-br-menu-dots" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isOpenModal === true ? (
          <AddModal handelToggleModal={handelToggleModal} />
        ) : null}
      </div>
    </>
  );
};

export default AddressBox;
