import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Register = () => {
  const navigate = useNavigate();
  const register = () => {
    return console.log("register");
  };

  return (
    <>
      <div tw="flex flex-col w-[30rem]">
        {/* 사용자 사진 입력 */}
        <div className="ImageForm" tw="flex flex-col">
          <div className="ImageField" tw="flex flex-col">
            <label> 증명사진 업로드 </label>
            <input type="image" tw="border-2" src="#" alt="증명사진"></input>
          </div>
        </div>
        {/* 필수 입력 */}
        <div className="RequireInputWrap" tw="flex flex-col">
          <label>필수 입력란</label>
          <div className="InputField" tw="flex flex-col">
            <label> 이메일 </label>
            <input type="email" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 </label>
            <input type="password" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 비밀번호 확인 </label>
            <input type="password" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 이름 입력 </label>
            <input type="text" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 생년월일 입력 </label>
            <input type="date" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 성별 입력 </label>
            <div tw="flex flex-row justify-around">
              <div className="RadioItem">
                <input
                  type="radio"
                  tw="border-2"
                  value="남자"
                  name="gender"
                ></input>
                <label> 남자 </label>
              </div>
              <div className="RadioItem">
                <input
                  type="radio"
                  tw="border-2"
                  value="여자"
                  name="gender"
                ></input>
                <label> 여자 </label>
              </div>
            </div>
          </div>
        </div>
        {/* 선택 입력(접혀있음) */}
        <div className="OptionalInputWrap" tw="flex flex-col">
          <label>선택 입력란</label>
          <div className="InputField" tw="flex flex-col">
            <label> 연락처 </label>
            <input type="tel" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 거주지</label>
            <input type="text" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 소속 </label>
            <input type="text" tw="border-2"></input>
          </div>
          <div className="InputField" tw="flex flex-col">
            <label> 직위 </label>
            <input type="text" tw="border-2"></input>
          </div>
        </div>
        <div className="ButtonWrap" tw="flex flex-col">
          <button
            className="RegisterBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-blue-400"
            onClick={() => register}
          >
            회원가입
          </button>
          <button
            className="HomeBtn"
            tw="m-2 p-2 rounded-[0.5rem] bg-gray-400"
            onClick={() => navigate(-1)}
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
