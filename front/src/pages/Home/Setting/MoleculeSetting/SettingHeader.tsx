import { Label } from "@/components/atoms";

import tw from "twin.macro";

const SettingHeader = () => {
  return (
    <div className="Header">
      <Label text="설정" custom={tw`text-3xl`} />
      <hr tw="my-2 border-t-2 border-blue-600"></hr>
    </div>
  );
};

export default SettingHeader;
