import { Button, Icon, Label, TextInput, Wrapper } from "@/components/atoms";

import { useState } from "react";
import tw from "twin.macro";

const SendBox = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const [editFile, setEditFile] = useState("");
  return (
    <div
      className="SendBoxForm"
      tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
    >
      <div className="Header">
        <label tw="text-3xl">보낸 문서함</label>
        <hr tw="my-2 border-t-2 border-blue-600"></hr>
        <div tw="flex justify-between min-w-[64rem]">
          <div>
            <Icon icon="fi fi-br-search" custom={tw` ml-8 my-10`} />
            <TextInput
              className="DocsSearch"
              placeholder="문서 검색"
              custom={tw`min-w-[20rem] max-w-[20rem]  my-10`}
            />
          </div>
          <div tw="mx-8 my-10 ">
            <span tw="border-r-2">
              <Icon icon="fi-rr-add-document" custom={tw`mx-2 px-2`} />
            </span>
            <span tw="border-r-2">
              <Icon icon="fi-br-download" custom={tw`mx-2 px-2`} />
            </span>
            <span>
              <Icon icon=" fi-rr-trash" custom={tw`mx-2 px-2`} />
            </span>
          </div>
        </div>
        <div className="FileBox" tw="border-2 min-w-[64rem] flex flex-col">
          <div
            className="FileBoxHeader"
            tw="min-h-[3rem] max-h-[3rem] flex flex-row "
          >
            <div tw="mx-4 my-3">
              <input type="checkbox" />
            </div>

            <div tw="flex min-w-[21rem] max-w-[21rem]">
              <Label text="문서이름" custom={tw`py-3`} />
              <Icon icon="fi-rr-caret-up" />
            </div>
            <div className="DocsStatus" tw="flex ml-auto my-auto">
              <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4 ">
                문서수정일 <Icon icon="fi-rr-caret-up" />
                {/* <Icon icon="fi-rr-caret-down" /> */}
              </div>
              <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4">
                문서공유일 <Icon icon="fi-rr-caret-up" />
              </div>
              <div tw="min-w-[9rem] max-w-[9rem] mx-4 px-4">
                문서마감일 <Icon icon="fi-rr-caret-up" />
              </div>
              <div tw="mx-4 px-4 py-2.5">삭제</div>
            </div>
          </div>
        </div>
        {/* 문서리스트 */}
        <div className="FileList" tw="border-2 min-w-[64rem] flex flex-col">
          <div className="FileItem" tw="flex flex-row">
            <div tw="mx-4 my-3">
              <input type="checkbox" />
            </div>
            <div
              className="DocsName"
              tw="min-w-[20rem] max-w-[20rem]  mx-4 my-3"
            >
              {isEdit === false ? (
                <div>
                  <span>삼성 청년 SW 아카데미 문서.docx</span>{" "}
                  <Icon
                    icon="fi-rr-edit"
                    size="sm"
                    custom={tw`mx-4`}
                    onClick={handleEdit}
                  />
                </div>
              ) : (
                <div tw="flex flex-row">
                  <TextInput
                    variant="primary"
                    custom={tw`border-2 rounded-sm`}
                  />
                  <Button
                    variant="secondary"
                    isOutline={true}
                    custom={tw`px-2 mx-1`}
                    onClick={handleEdit}
                  >
                    x
                  </Button>
                  <Button
                    variant="primary"
                    custom={tw`px-2 mx-1`}
                    onClick={handleEdit}
                  >
                    O
                  </Button>
                </div>
              )}
            </div>
            <div className="DocsStatus" tw="flex ml-auto my-auto">
              <div
                className="DocsEdit"
                tw="min-w-[9rem] max-w-[9rem]  mx-4 my-3 px-2"
              >
                2023-05-10
              </div>
              <div
                className="DocsShared"
                tw="min-w-[9rem] max-w-[9rem] mx-4 my-3 px-2"
              >
                2023-05-11
              </div>
              <div
                className="DocsDeadline"
                tw="min-w-[9rem] max-w-[9rem] mx-4 my-3 px-2"
              >
                2023-05-11
              </div>
              <div className="Doctrash" tw="mx-2 mt-2 px-2">
                <Icon icon=" fi-rr-trash" custom={tw`mx-2 px-2`} />
              </div>
            </div>
          </div>
          <div className="FileItem" tw="flex flex-row">
            <div tw="mx-4 my-3">
              <input type="checkbox" />
            </div>
            <div
              className="DocsName"
              tw="min-w-[20rem] max-w-[20rem] mx-4 my-3"
            >
              <span>삼성 청년 SW 아카데미 문서.docx</span>
              <Icon icon="fi-rr-edit" size="sm" custom={tw`mx-4`} />
            </div>
            <div className="DocsStatus" tw="flex ml-auto my-auto">
              <div
                className="DocsEdit"
                tw="min-w-[9rem] max-w-[9rem]  mx-4 my-3 px-2"
              >
                2023-05-10
              </div>
              <div
                className="DocsShared"
                tw="min-w-[9rem] max-w-[9rem]  mx-4 my-3 px-2"
              >
                2023-05-11
              </div>
              <div
                className="DocsDeadline"
                tw="min-w-[9rem] max-w-[9rem] mx-4 my-3 px-2"
              >
                2023-05-11
              </div>
              <div className="Doctrash" tw="mx-2  mt-2 px-2">
                <Icon icon=" fi-rr-trash" custom={tw`mx-2 px-2`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendBox;

// import { TableHeader } from "@/components/atoms";
// import { TableViewHeader, TableViewRow } from "@/components/molecules";
// import {
//   EmptyDocs,
//   PathSideToolBar,
//   ProgressItemBar,
//   SearchBar,
// } from "@/components/organisms";

// import "twin.macro";

// const DocsBox = () => {
//   const tableData: string[] = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//   ]; // 시험용 임시데이터
//   // const tableData: string[] = [];
//   const lables: string[] = [
//     "문서 이름",
//     "상태",
//     "문서 수정일",
//     "문서 공유일",
//     "문서 마감일",
//     "더보기",
//   ];
//   return (
//     <>
//       <div tw=" w-full" className="header">
//         <div tw="border-b-2 border-b-blue-700 h-[3.5rem]  items-center">
//           <TableHeader
//             label="내 보관함"
//             height="3.5rem"
//             size="2xl"
//           ></TableHeader>
//         </div>
//         <div tw="flex flex-col h-full" className="contents">
//           <div tw="flex  justify-end h-[5rem] mr-[3rem]">
//             <SearchBar />
//           </div>
//           <div tw="flex flex-row  justify-end m-[0.5rem] mr-[3rem] space-x-4">
//             <ProgressItemBar />
//             <PathSideToolBar />
//           </div>
//           <div className="table" tw="flex grow flex-col items-center mt-[2rem]">
//             <div>
//               <TableViewHeader
//                 isBookmarkActive={true}
//                 labels={lables}
//                 isAsc={true}
//               ></TableViewHeader>
//             </div>
//             <div tw="flex flex-col justify-center">
//               {tableData.length > 0 ? (
//                 tableData.map((data, index) => (
//                   <TableViewRow
//                     key={index}
//                     isBookmarkActive={true}
//                   ></TableViewRow>
//                 ))
//               ) : (
//                 <EmptyDocs />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DocsBox;
