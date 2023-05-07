import { Icon } from "@/components/atoms";

import tw from "twin.macro";

const ProgressItemBar = () => {
  const data: string[] = ["7", "3", "16"];
  return (
    <>
      <div tw="flex flex-row space-x-3 p-3 border rounded-3xl">
        {data[0] && (
          <>
            <Icon icon="circle" iconColor={tw`text-red-400`} />
            <div>미진행: {data[0]}</div>
          </>
        )}
        {data[1] && (
          <>
            <Icon icon="circle" iconColor={tw`text-orange-400`} />
            <div>미완료: {data[1]}</div>
          </>
        )}
        {data[2] && (
          <>
            <Icon icon="circle" iconColor="#53D118" />
            <div>완료: {data[2]}</div>
          </>
        )}
      </div>
    </>
  );
};

export default ProgressItemBar;
