import tw, { styled } from "twin.macro";

const RightSideBar = () => {
  return (
    <>
      <div
        className="RightSidebar"
        tw="flex flex-col min-w-[15rem] max-w-[15rem] bg-orange-100"
      >
        <div
          className="LabelTilteForm"
          tw="w-full px-4 pt-2 pb-4 border-b-2 bg-white"
        >
          <div className="FormHeader" tw="mb-2 text-base font-bold">
            {"label.type"}
          </div>
          <div className="FormContent">
            <input
              className="InputLabelTitle"
              tw="w-full p-1 border-b border-black"
            />
          </div>
        </div>
        <div
          className="FormatLabelForm"
          tw="grow w-full px-4 pt-2 pb-4 bg-white"
        >
          <div className="FormHeader" tw="mb-2 text-lg font-bold">
            라벨 서식
          </div>
          <div className="FormContent">
            <div className="FormatInput">
              <div className="FormHeader" tw="mb-2 text-base font-bold">
                폰트
              </div>
              <div className="FormContent">
                <select
                  className="SelectSubject"
                  tw="w-full p-1 border rounded border-black"
                >
                  <option value="font 1">font 1</option>
                  <option value="font 2">font 2</option>
                  <option value="font 3">font 3</option>
                </select>
              </div>
            </div>
            <div className="FormatInput">
              <div className="FormHeader" tw="mb-2 text-base font-bold">
                사이즈
              </div>
              <div className="FormContent">
                <select
                  className="SelectSubject"
                  tw="w-full p-1 border rounded border-black"
                >
                  <option value="font 1">small</option>
                  <option value="font 2">medium</option>
                  <option value="font 3">large</option>
                </select>
              </div>
            </div>
            <div className="FormatInput">
              <div className="FormHeader" tw="mb-2 text-base font-bold">
                정렬
              </div>
              <div className="FormContent">
                <select
                  className="SelectSubject"
                  tw="w-full p-1 border rounded border-black"
                >
                  <option value="font 1">왼쪽 정렬</option>
                  <option value="font 2">중앙 정렬</option>
                  <option value="font 3">가운데 정렬</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
