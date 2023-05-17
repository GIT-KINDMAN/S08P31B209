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
    const newPosition = {
      // x: e.clientX * (zoom / 100),
      // y: e.clientY * (zoom / 100),
      x:
        (e.clientX -
          offsetPosition.x -
          (widgetRef.current?.parentElement?.offsetWidth ?? 0) / 2) *
          ((1 / zoom) * 100) +
        (widgetRef.current?.parentElement?.offsetWidth ?? 0) / 2 -
        (widgetRef.current?.parentElement?.offsetLeft ??
          parent?.offsetLeft ??
          0),
      y:
        (e.clientY -
          offsetPosition.y -
          (widgetRef.current?.parentElement?.offsetHeight ?? 0) / 2) *
          ((1 / zoom) * 100) +
        (widgetRef.current?.parentElement?.offsetHeight ?? 0) / 2 -
        (widgetRef.current?.parentElement?.offsetTop ?? parent?.offsetTop ?? 0),
    };
    setPosition(newPosition);
    dispatch(updateWidget({ ...widget, pos: newPosition }));
  };

  const handleFocus = () => {
    dispatch(setSelectedWidget(widget.id));
    // console.log("Focus: " + widget.id);
  };

  const getContent = (type: string) => {
    let content;

    switch (type) {
      case "text":
        content = (
          <>
            <label>텍스트</label>
            <input
              type="text"
              value={widget.value}
              tw="w-full p-1 border-b-2 text-black border-orange-900 focus:(outline-0)"
              onChange={(e) =>
                dispatch(updateWidget({ ...widget, value: e.target.value }))
              }
            />
          </>
        );
        break;
      default:
        content = "알 수 없음";
        break;
    }

    return content;
  };

  return (
    <>
      <div
        ref={widgetRef}
        tw="absolute z-30 px-3 py-1 min-w-[6rem] text-orange-900 bg-orange-200/50 rounded-[0.25rem] cursor-move"
        // style={{
        //   left: `${
        //     (position.x -
        //       (widgetRef.current?.parentElement?.offsetLeft ??
        //         parent?.offsetLeft ??
        //         0) -
        //       (widgetRef.current?.parentElement?.offsetWidth ??
        //         parent?.offsetWidth ??
        //         0) /
        //         2) *
        //       (zoom / 100) +
        //     (widgetRef.current?.parentElement?.offsetWidth ??
        //       parent?.offsetWidth ??
        //       0) /
        //       2
        //   }px`,
        //   top: `${
        //     (position.y -
        //       (widgetRef.current?.parentElement?.offsetTop ??
        //         parent?.offsetTop ??
        //         0) -
        //       (widgetRef.current?.parentElement?.offsetHeight ??
        //         parent?.offsetHeight ??
        //         0) /
        //         2) *
        //       (zoom / 100) +
        //     (widgetRef.current?.parentElement?.offsetHeight ??
        //       parent?.offsetHeight ??
        //       0) /
        //       2
        //   }px`,
        // }}
        style={{
          left: `${
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
          }px`,
          top: `${
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
          }px`,
        }}
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
