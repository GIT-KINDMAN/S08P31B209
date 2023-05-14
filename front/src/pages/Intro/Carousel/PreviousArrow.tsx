import { Icon } from "@/components/atoms";

import "@flaticon/flaticon-uicons/css/all/all.css";
import React from "react";
import tw from "twin.macro";

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

const NextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <div
      className="next-arrow"
      onClick={onClick}
      tw="text-lg block cursor-pointer w-4 top-48 -left-12 absolute "
    >
      {/* <Icon icon="fi-br-angle-left" custom={tw`text-4xl`} /> */}
    </div>
  );
};

export default NextArrow;
