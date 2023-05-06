import { Icon, TableHeader } from "@/components/atoms";
import { TableViewHeader, TableViewRow } from "@/components/molecules";
import { PathSideToolBar, SearchBar } from "@/components/organisms";

import "twin.macro";

const DocsBox = () => {
  // const tableData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const tableData: string[] = [];
  return (
    <>
      <div tw="border bg-orange-100 w-full" className="header">
        <div tw="flex bg-lightgray-700  h-[3.5rem]  items-center ml-[8rem] mr-[8rem]">
          <TableHeader
            label="내 보관함"
            width="40rem"
            height="3.5rem"
            tw="bg-orange-400"
            size="lg"
          ></TableHeader>
        </div>
        <div tw="flex flex-col h-full" className="contents">
          <div tw="flex  bg-orange-300 justify-end h-[5rem] mr-[3rem]">
            <SearchBar />
          </div>
          <div tw="flex  bg-red-500 justify-end m-[0.5rem] mr-[3rem]">
            <PathSideToolBar />
          </div>
          <div className="table" tw="flex grow flex-col items-center">
            <div tw="bg-orange-400">
              <TableViewHeader
                isBookmarkActive={false}
                labels={[
                  "문서 이름",
                  "상태",
                  "문서 수정일",
                  "문서 공유일",
                  "문서 마감일",
                  "더보기",
                ]}
              ></TableViewHeader>
            </div>
            <div tw="flex bg-orange-500 w-4/5 h-4/5 justify-center">
              {tableData.length > 0 ? (
                tableData.map((data, index) => (
                  <TableViewRow
                    key={index}
                    isBookmarkActive={true}
                  ></TableViewRow>
                ))
              ) : (
                <div tw="flex flex-col justify-center">
                  <Icon icon="broom" iconType="rr" size="5xl"></Icon>
                  <div tw="text-3xl m-1">문서함이 비어있어요</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsBox;
