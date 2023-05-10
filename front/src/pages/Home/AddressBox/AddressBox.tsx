import { redirect } from "react-router-dom";
import "twin.macro";

const AddressBox = () => {
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
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2">
                서울 1반
              </div>
              <div className="GroupItem" tw="border-b border-dashed mx-4 my-2">
                서울 2반
              </div>
            </div>
          </div>

          {/* 그룹별 그룹원 부분 */}
          <div tw="flex flex-col   min-w-[32rem] max-w-[32rem] mx-auto">
            <div className="MemberWrap" tw="text-xl font-bold my-4 ml-8">
              그룹원 보기
            </div>
            <div
              className="MembersBox"
              tw="border-2 text-center min-w-[16rem]  min-h-[30rem] max-h-[30rem] text-xl overflow-y-scroll"
            >
              <div
                className="MemberHeader"
                tw="border-b border-b-2 mx-4 my-2 flex justify-between px-4"
              >
                <div tw="max-w-[16rem] overflow-x-auto "> 이름 </div>
                <div tw="max-w-[16rem] overflow-x-auto"> 조직 </div>
                <div tw="min-w-[12rem] max-w-[12rem] overflow-x-auto">
                  이메일
                </div>
                <div tw="max-w-[16rem] overflow-x-auto"> 전화번호 </div>
              </div>
              <div
                className="MemberItem"
                tw="text-sm border-b border-dashed mx-4 my-2 flex justify-around"
              >
                <div tw="max-w-[16rem] overflow-x-auto mx-auto"> 홍길동 </div>
                <div tw="max-w-[16rem] overflow-x-auto mx-auto"> 대전 1반 </div>
                <div tw="min-w-[12rem] max-w-[12rem] overflow-x-auto mx-auto">
                  gindong123@naver.com
                </div>
                <div tw="max-w-[16rem] overflow-x-auto mx-auto">
                  010-1234-5678
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressBox;
