import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const EditorEdit = () => {
  const dummyFunc = () => console.log("func call");

  return (
    <>
      <div className="viewer" tw="flex flex-col grow">
        <div className="viewerTop">
          <div
            className="ViewerToolbarWrap"
            tw="flex justify-center border-t-2 border-blue-700 py-1 bg-blue-800"
          >
            <div
              className="ViewerToolbar"
              tw="flex items-center text-sm text-lightgray-400 rounded-[2rem] bg-blue-600"
            >
              <div className="ZoomTool" tw="flex">
                <div
                  className="ZoomOut"
                  tw="pt-1 mx-2"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-zoom-out"></i>
                </div>
                <input
                  type="text"
                  value={"100%"}
                  tw="min-w-[4rem] max-w-[4rem] text-center bg-inherit"
                  onClick={() => dummyFunc()}
                />
                <div
                  className="ZoomIn"
                  tw="pt-1 mx-2"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-zoom-in"></i>
                </div>
              </div>
              <div className="HelpTool" tw="flex text-sm rounded-[2rem]">
                <div
                  className="ZoomIn"
                  tw="pt-1 mx-2 text-base"
                  onClick={() => dummyFunc()}
                >
                  <i className="fi fi-bs-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div tw="flex flex-row grow">
          <div
            className="LeftSidebar"
            tw="flex flex-col min-w-[15rem] max-w-[15rem] bg-orange-100"
          >
            left
          </div>
          <div className="Center" tw="w-full">
            center view
          </div>
          <div
            className="RightSidebar"
            tw="flex flex-col min-w-[15rem] max-w-[15rem] bg-orange-100"
          >
            right
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
