import { useNavigate } from "react-router-dom";
import "twin.macro";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="SettingForm"
        tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
      >
        <div className="Header">
          <label tw="text-3xl">설정</label>
          <hr tw="my-2 border-t-2 border-blue-600"></hr>
        </div>
        <div className="Content">
          <div className="AccountWrap">
            <div
              className="AccountInfo"
              tw="flex mb-2 p-4 rounded-lg shadow-md"
            >
              <div className="Title" tw="text-xl font-bold">
                <label>계정 정보</label>
              </div>
              <div className="Detail" tw="flex flex-col ml-8 pl-4 border-l-2">
                <ul className="DetailList">
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div className="itemKey" tw="w-[4rem] min-w-[4rem] mr-2">
                      <label tw="font-bold">이름</label>
                    </div>
                    <div className="itemValue">김주성</div>
                  </li>
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div className="itemKey" tw="min-w-[4rem] mr-2">
                      <label tw="font-bold">연락처</label>
                    </div>
                    <div className="itemValue">010-9234-7466</div>
                  </li>
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div className="itemKey" tw="min-w-[4rem] mr-2">
                      <label tw="font-bold">이메일</label>
                    </div>
                    <div className="itemValue">201701996@o.cnu.ac.kr</div>
                  </li>
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div className="itemKey" tw="min-w-[4rem] mr-2">
                      <label tw="font-bold">소속</label>
                    </div>
                    <div className="itemValue">SSAFY 8기 대전</div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="AccountController"
              tw="flex mb-2 p-4 rounded-lg shadow-md"
            >
              <div className="Title" tw="text-xl font-bold">
                <label>계정 설정</label>
              </div>
              <div className="Detail" tw="flex flex-col ml-8 pl-4 border-l-2">
                <ul className="DetailList">
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div
                      tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 border-orange-600) rounded-lg cursor-pointer"
                      onClick={() => navigate("/member/info")}
                    >
                      <label tw="font-bold cursor-pointer">정보 수정</label>
                    </div>
                  </li>
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div
                      tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 border-orange-600) rounded-lg cursor-pointer"
                      onClick={() => navigate("/member/password")}
                    >
                      <label tw="font-bold cursor-pointer">비밀번호 변경</label>
                    </div>
                  </li>
                  <li className="DetailListItem" tw="flex pt-1 pb-3">
                    <div
                      tw="w-fit px-2 py-1 border-2 hocus:(text-orange-600 bg-red-200) rounded-lg cursor-pointer"
                      onClick={() => navigate("/member/leave")}
                    >
                      <label tw="font-bold text-red-600 cursor-pointer">
                        계정 탈퇴
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
