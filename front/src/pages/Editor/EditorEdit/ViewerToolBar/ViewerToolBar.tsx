import { Icon } from "@/components/atoms";

import "twin.macro";

const ViewerToolBar = () => {
  const dummyFunc = () => console.log("func call");

  return (
    <>
      <div tw="flex justify-center border-t-2 border-blue-700 py-1 bg-blue-800">
        <div
          className="ViewerToolbar"
          tw="flex items-center px-4 py-1 text-sm text-lightgray-400 rounded-[2rem] bg-blue-600"
        >
          <div className="ZoomTool" tw="flex">
            <Icon icon="fi-bs-zoom-out" size="sm" onClick={() => dummyFunc()} />
            <input
              type="text"
              value={"100%"}
              tw="min-w-[4rem] max-w-[4rem] text-center bg-inherit"
              onClick={() => dummyFunc()}
            />
            <Icon icon="fi-bs-zoom-in" size="sm" onClick={() => dummyFunc()} />
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
