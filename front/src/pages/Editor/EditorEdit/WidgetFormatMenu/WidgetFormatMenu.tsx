import { updateWidget } from "@store/slice/imageViewSlice";
import { RootState } from "@store/store";

import { useDispatch, useSelector } from "react-redux";
import "twin.macro";

const WidgetFormatMenu = () => {
  const dispatch = useDispatch();

  const selectedWidgetId = useSelector(
    (state: RootState) => state.widgetSelect.id,
  );
  const widgetState = useSelector((state: RootState) =>
    state.imageView.widgets.find((widget) => widget.idx === selectedWidgetId),
  );

  return (
    <>
      <div
        className="WidgetTypeInfoForm"
        tw="flex flex-col min-w-[15rem] max-w-[15rem] bg-orange-100"
      >
        <div tw="w-full px-4 pb-2 border-b-2 bg-white">
          <div tw="my-2 text-base font-bold">
            {`위젯 ID : ${widgetState?.idx ?? ""}`}
          </div>
          <div tw="my-2 text-base font-bold">
            {`위젯 타입 : ${widgetState?.type ?? ""}`}
          </div>
        </div>
        <div
          className="WidgetNameForm"
          tw="w-full px-4 pt-2 pb-4 border-b-2 bg-white"
        >
          <div className="FormTitle" tw="mb-2 text-base font-bold">
            위젯 이름
          </div>
          <div className="FormContent">
            <input
              type="text"
              value={widgetState?.name}
              tw="w-full p-1 border-b border-black"
              onChange={(e) =>
                dispatch(updateWidget({ ...widgetState, name: e.target.value }))
              }
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

export default WidgetFormatMenu;
