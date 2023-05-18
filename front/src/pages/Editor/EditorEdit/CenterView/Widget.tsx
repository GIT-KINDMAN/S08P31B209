// Memo.tsx
import { Icon } from "@atomic/atoms";

import {
  delWidget,
  updateWidget,
  widgetState,
} from "@store/slice/imageViewSlice";
import { setSelectedWidget } from "@store/slice/widgetSelectSlice";
import { RootState } from "@store/store";

import { DragEvent, MouseEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";

interface IProps {
  widget: widgetState;
  parent: HTMLDivElement | null;
}

const Widget = ({ widget, parent }: IProps) => {
  const dispatch = useDispatch();

  const zoom = useSelector((state: RootState) => state.imageView.zoom);

  const [position, setPosition] = useState(widget.pos);

  const widgetRef = useRef<HTMLDivElement>(null);

  let offsetPosition = { x: 0, y: 0 };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    offsetPosition = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };
    // console.log(offsetPosition);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const computedStyles = getComputedStyle(widgetRef.current ?? new Element());

    const newPosition = {
      x:
        (e.clientX -
          offsetPosition.x -
          parseInt(computedStyles.marginLeft) -
          parseInt(computedStyles.paddingLeft) -
          (widgetRef.current?.parentElement?.offsetWidth ?? 0) / 2) *
          ((1 / zoom) * 100) +
        (widgetRef.current?.parentElement?.offsetWidth ?? 0) / 2 -
        (widgetRef.current?.parentElement?.offsetLeft ??
          parent?.offsetLeft ??
          0) *
          ((1 / zoom) * 100),
      y:
        (e.clientY -
          offsetPosition.y -
          parseInt(computedStyles.marginTop) -
          parseInt(computedStyles.paddingTop) -
          (widgetRef.current?.parentElement?.offsetHeight ?? 0) / 2) *
          ((1 / zoom) * 100) +
        (widgetRef.current?.parentElement?.offsetHeight ?? 0) / 2 -
        (widgetRef.current?.parentElement?.offsetTop ??
          parent?.offsetTop ??
          0) *
          ((1 / zoom) * 100),
    };
    setPosition(newPosition);
    dispatch(updateWidget({ ...widget, pos: newPosition }));
  };

  const handleFocus = () => {
    dispatch(setSelectedWidget(widget.idx));
    // console.log("Focus: " + widget.id);
  };

  const getContent = (type: string) => {
    let content;

    switch (type) {
      case "text":
        content = (
          <>
            <div>
              <div tw="mb-2">[ {widget.name} ]</div>
              <input
                type="text"
                value={widget.value}
                tw="w-full p-1 border-b-2 text-black border-orange-900 focus:(outline-0)"
                onChange={(e) =>
                  dispatch(updateWidget({ ...widget, value: e.target.value }))
                }
              />
            </div>
          </>
        );
        break;
      default:
        content = "알 수 없음";
        break;
    }

    return content;
  };

  const calcPosX = () => {
    return (
      (position.x -
        (widgetRef.current?.parentElement?.offsetWidth ??
          parent?.offsetWidth ??
          0) /
          2) *
        (zoom / 100) +
      (widgetRef.current?.parentElement?.offsetWidth ??
        parent?.offsetWidth ??
        0) /
        2
    );
  };

  const calcPosY = () => {
    return (
      (position.y -
        (widgetRef.current?.parentElement?.offsetHeight ??
          parent?.offsetHeight ??
          0) /
          2) *
        (zoom / 100) +
      (widgetRef.current?.parentElement?.offsetHeight ??
        parent?.offsetHeight ??
        0) /
        2
    );
  };

  return (
    <>
      <div
        ref={widgetRef}
        tw="absolute z-30 p-2 text-orange-900 bg-orange-200/50 rounded-[0.25rem] cursor-move"
        style={{
          left: `${calcPosX()}px`,
          top: `${calcPosY()}px`,
        }}
        // hidden={ }
        tabIndex={0}
        draggable={true}
        onDragEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onFocus={handleFocus}
      >
        <div tw="absolute z-20 top-0 left-0 w-0 h-0 [border-top: 0.75rem solid red] [border-right: 0.75rem solid transparent]" />
        {getContent(widget.type)}
        <div tw="absolute z-20 top-[-0.5rem] right-[-0.5rem] w-6 h-6 flex justify-center items-center cursor-pointer text-orange-900 bg-orange-200 rounded-[2rem]">
          <Icon
            icon="fi-bs-cross-small"
            size="sm"
            custom={tw`h-7`}
            onClick={() => dispatch(delWidget(widget))}
          ></Icon>
        </div>
      </div>
    </>
  );
};

export default Widget;
