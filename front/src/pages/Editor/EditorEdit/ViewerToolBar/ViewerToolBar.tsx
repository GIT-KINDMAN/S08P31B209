import { setZoom } from "@store/slice/imageViewSlice";
import type { RootState } from "@store/store";

import { Icon } from "@/components/atoms";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

const ViewerToolBar = () => {
  const dispatch = useDispatch();
  const zoom = useSelector((state: RootState) => state.imageView.zoom);
  const [inputZoom, setInputZoom] = useState(zoom.toString());

  const dummyFunc = () => console.log("func call");

  useEffect(() => {
    setInputZoom(zoom.toString());
  }, [zoom]);

  return (
    <>
      <div tw="flex justify-center border-t-2 border-blue-700 py-1 bg-blue-800">
        <div
          className="ViewerToolbar"
          tw="flex items-center px-4 py-1 text-sm text-lightgray-400 rounded-[2rem] bg-blue-600"
        >
          <div className="ZoomTool" tw="flex">
            <Icon
              icon="fi-bs-zoom-out"
              size="sm"
              onClick={() => {
                dispatch(setZoom(zoom - 5));
              }}
            />
            <input
              type="number"
              value={inputZoom}
              tw="min-w-[4rem] max-w-[4rem] text-center bg-inherit"
              onChange={(e) => setInputZoom(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  dispatch(setZoom(parseInt(inputZoom)));
                }
              }}
            />
            <Icon
              icon="fi-bs-zoom-in"
              size="sm"
              onClick={() => {
                dispatch(setZoom(zoom + 5));
              }}
            />
          </div>
          <div className="HelpTool" tw="flex ml-4">
            <Icon icon="fi-bs-info" size="sm" onClick={() => dummyFunc()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewerToolBar;
