import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const EditorEdit = () => {
  return (
    <>
      <div tw="flex flex-row grow">
        <div className="LeftSidebar" tw="min-w-[15rem] bg-blue-100">
          left
        </div>
        <div className="CenterSidebar" tw="w-full">
          <div tw="flex justify-center items-center bg-blue-900">
            <div className="ZoomOut" tw="mx-2 onClick={() => { }}">
              <i className="fi fi-bs-zoom-out"></i>
            </div>
            <input
              type="text"
              value={"100%"}
              tw="min-w-[4rem] max-w-[4rem] text-center bg-inherit"
              onClick={() => {}}
            />
            <div className="ZoomIn" tw="mx-2 onClick={() => { }}">
              <i className="fi fi-bs-zoom-in"></i>
            </div>
          </div>
        </div>
        <div className="RightSidebar" tw="min-w-[15rem] bg-orange-100">
          right
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
