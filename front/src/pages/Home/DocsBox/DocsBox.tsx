import type { RootState } from "@store/store";

import { receivedbox } from "@/apis/boxAPI";

import TemplateDocs from "./TemplateDocs/TemplateDocs";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "twin.macro";

const DocsBox = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [boxData, setBoxData] = useState(null);

  useEffect(() => {
    // console.log(authState);
    if (authState.authToken) {
      const token = authState.authToken;

      receivedbox("keyword", "asc", "desc", "asc", "asc", token)
        .then((request) => {
          // console.log(request);
          setBoxData(request.data);
          console.log(request.data);
          console.log("boxData : ", boxData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div
      className="ReceivedBoxForm"
      tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
    >
      <TemplateDocs header="받은 문서함" />
    </div>
  );
};

export default DocsBox;
