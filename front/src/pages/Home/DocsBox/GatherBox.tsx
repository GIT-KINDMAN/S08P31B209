import type { RootState } from "@store/store";

import { progressDocs } from "@/apis/boxAPI";
import { Icon } from "@/components/atoms";

import DocsHeader from "./MoleculeDocsBox/DocsHeader";
import DocsListHeader from "./MoleculeDocsBox/DocsListHeader";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import
import tw from "twin.macro";

interface gatherDataItem {
  completed_count: number;
  not_completed_count: number;
  members: memberTypes[];
}
interface memberTypes {
  email: string;
  is_completed: boolean;
  name: string;
  phone: string;
}

const GatherBox = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [gatherData, setGatherData] = useState<gatherDataItem | null>(null);
  const { idx } = useParams();
  useEffect(() => {
    if (authState.authToken && idx) {
      const token = authState.authToken;
      const id = parseInt(idx);
      progressDocs(id, token)
        .then((request) => {
          setGatherData(request.data.value);
        })
        .catch((e) => console.log(e));
    }
  }, [authState.authToken]);

  if (gatherData) {
    console.log("gatherData", gatherData);
  }

  const memberData = gatherData?.members?.map(
    (item: memberTypes, i: number) => {
      return (
        <div
          className="DocsReceiver"
          tw="flex my-auto items-center border-b-2"
          key={i}
        >
          <div className="DocsStatus" tw="min-w-[2rem] max-w-[2rem]  mx-8 my-3">
            <span>
              <div tw="min-w-[1.5rem] max-w-[1.5rem] min-h-[1.5rem] max-h-[1.5rem] bg-red-700 border-2 rounded-full " />
            </span>
          </div>
          <div
            className="DocsIdx"
            tw="min-w-[4rem] max-w-[4rem]  my-3  text-center "
          >
            {i}
          </div>
          <div
            className="DocsReceiverName"
            tw="min-w-[8rem] max-w-[rem] my-3 text-center "
          >
            <span> {item?.name} </span>
          </div>
          <div
            className="DocsEmail"
            tw="min-w-[18rem] max-w-[18rem]   my-3 text-center"
          >
            {item?.email}
          </div>

          <div
            className="DocsDelete"
            tw="min-w-[12rem] max-w-[12rem] my-3 text-center"
          >
            <Icon
              icon=" fi-rr-trash"
              custom={tw` hover:scale-90 hover:text-orange-400 `}
            />
          </div>
        </div>
      );
    },
  );

  return (
    <div tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white">
      <DocsHeader header="문서 제출 현황" />
      <div tw="flex mx-4 my-4 py-4 min-w-[20rem] max-w-[20rem] text-center border-2 rounded-2xl align-middle justify-center">
        <div tw="flex flex-row font-bold mx-4 ">
          <div tw="min-w-[1.5rem] max-w-[1.5rem] min-h-[1.5rem] max-h-[1.5rem] bg-red-700 border-2 rounded-full " />
          <span> 미진행 : {gatherData?.not_completed_count}</span>
        </div>
        <div tw="flex flex-row font-bold mx-4">
          <div tw="min-w-[1.5rem] max-w-[1.5rem] min-h-[1.5rem] max-h-[1.5rem] bg-green-500 border-2 rounded-full " />
          <span onClick={() => console.log(idx)}>
            진행 : {gatherData?.completed_count}
          </span>
        </div>
      </div>
      <DocsListHeader />
      <div
        className="FileItem"
        tw="flex flex-col min-w-[40rem] max-w-[60rem] border-t-2 "
      >
        {memberData}
      </div>
    </div>
  );
};

export default GatherBox;
