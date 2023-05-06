import { Icon, TextArea } from "@/components/atoms";

import tw from "twin.macro";

const SearchBar = () => {
  return (
    <>
      <div tw="flex flex-row items-center space-x-1 border-lightgray-700 border-b-2 h-[3rem] mt-[0.5rem]">
        <TextArea variant="search"></TextArea>
        <Icon icon="search" iconColor={tw`text-blue-800`} size="lg"></Icon>
      </div>
    </>
  );
};

export default SearchBar;
