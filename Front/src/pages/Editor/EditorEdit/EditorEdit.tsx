import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const EditorEdit = () => {
  return (
    <>
      <div tw="flex flex-row grow">
        <div className="LeftSidebar" tw="min-w-[15rem] bg-blue-100">
          left
        </div>
        <div className="CenterSidebar" tw="w-full bg-red-100">
          center
        </div>
        <div className="RightSidebar" tw="min-w-[15rem] bg-orange-100">
          right
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
