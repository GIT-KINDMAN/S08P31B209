import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import ViewerToolBar from "./ViewerToolBar/ViewerToolBar";

import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

const EditorEdit = () => {
  return (
    <>
      <div className="viewer" tw="flex flex-col grow">
        <div className="viewerTop">
          <ViewerToolBar />
        </div>
        <div tw="flex flex-row grow">
          <LeftSideBar />
          <div className="Center" tw="w-full">
            center view
          </div>
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
