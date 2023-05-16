import ImageViewer from "./CenterView/ImageViewer";
import ViewerToolBar from "./ViewerToolBar/ViewerToolBar";
import WidgetFormatMenu from "./WidgetFormatMenu/WidgetFormatMenu";
import WidgetGalleryMenu from "./WidgetGalleryMenu/WidgetGalleryMenu";

// import { useNavigate } from "react-router-dom";
import "twin.macro";

const EditorEdit = () => {
  return (
    <>
      <div className="viewer" tw="flex flex-col w-full">
        <ViewerToolBar />
        <div tw="flex flex-row w-full h-full">
          <WidgetGalleryMenu />
          <ImageViewer />
          <WidgetFormatMenu />
        </div>
      </div>
    </>
  );
};

export default EditorEdit;
