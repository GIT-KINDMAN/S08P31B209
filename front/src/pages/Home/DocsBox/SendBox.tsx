import type { RootState } from "@store/store";

import { sentbox } from "@/apis/boxAPI";

import TemplateDocs from "./TemplateDocs/TemplateDocs";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "twin.macro";

const SendBox = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [sendData, setSendData] = useState([]);

  useEffect(() => {
    // console.log(authState);
    if (authState.authToken) {
      const token = authState.authToken;

      sentbox("", "", "", "", "", token)
        .then((request) => {
          // console.log(request);
          setSendData(request.data.value.content);
          console.log("sent1:", request.data.value.content);
          // console.log("sent2:", sendData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div
      className="SendBoxForm"
      tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
    >
      <TemplateDocs header="보낸 문서함" sendData={sendData} />
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
