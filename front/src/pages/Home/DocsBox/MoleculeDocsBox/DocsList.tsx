import type { RootState } from "@store/store";

import { deleteReceive, deleteSend } from "@/apis/boxAPI";
import { downfile } from "@/apis/fileAPI";
import { Icon } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

// import { useState } from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
import tw from "twin.macro";

export interface receiveDataItem {
  receiverDocsName: string;
  receiverDeadline: string;
  receiverEmail: string;
  receiverName: string;
  receiverSenderEmail: string;
  receiverSenderName: string;
  receiverIdx: number;
  template: templateType;
  updatedDate: string;
}

export interface sendDataItem {
  createdDate: string;
  member: memberType;
  receivers: string[];
  templateDeadline: string;
  templateIdx: number;
  templateName: string;
  templatefile: templatefileType;
  templateUuid: string;
  updatedDate: string;
}

interface memberType {
  memberEmail: string;
  memberName: string;
}

interface templateType {
  member: object;
  templateDeadline: string;
  templateName: string;
  templateUuid: string;
  templatefile: templatefileType;
}

interface templatefileType {
  templatefileIdx: number;
  templatefileOriginalName: string;
  templatefileSavedName: string;
  templatefileSavedPath: string;
}

const DocsList = ({ header, sendData, receiveData }: HeaderProps) => {
  // 문서이름 변경

  const authState = useSelector((state: RootState) => state.auth);

  // 문서 리스트 출력
  const sendList = sendData?.map((item: sendDataItem, i: number) => {
    const token = authState.authToken;
    const extractDownloadFilename = (response: any) => {
      const disposition = response.headers["content-disposition"];
      const matchResult = disposition.match(
        /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
      );

      if (matchResult && matchResult[1]) {
        const fileName = decodeURI(matchResult[1].replace(/['"]/g, ""));
        return fileName;
      }
      return ""; // 결과를 찾지 못한 경우 빈 문자열을 반환하거나 다른 처리를 수행할 수 있습니다.
    };
    const download = () => {
      if (token) {
        downfile(item.templateUuid, token)
          .then((response) => {
            const blob = new Blob([response.data], { type: "image/png" }); // 이미지 파일 형식에 맞게 type을 설정합니다. 예시로 "image/png"을 사용하였습니다.
            const fileObjectUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = fileObjectUrl;
            link.style.display = "none";
            link.download = extractDownloadFilename(response);
            console.log(fileObjectUrl, link, blob);
            console.log(response);
            console.log(item.templateUuid);
            console.log(link.href);
            console.log(link.download);

            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(fileObjectUrl);
          })
          .catch((e) => console.log(e));
      }
    };

    const handleDeleteSend = () => {
      if (token) {
        deleteSend(item.templateIdx, token)
          .then((request) => {
            request;
            window.location.reload();
          })
          .catch((e) => console.log(e));
      }
    };

    return (
      <div className="FileItem" tw="flex flex-row" key={i}>
        <div className="DocsName" tw="min-w-[16rem] max-w-[16rem]  mx-4 my-3">
          <div>
            <Icon
              icon="fi-br-download"
              size="sm"
              custom={tw`mx-2 hover:scale-110 hover:text-blue-500`}
              onClick={() => {
                download();
              }}
            />
            <span>{item.templateName}</span>
          </div>
        </div>
        <div className="DocsReceiver" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3   text-center"
          >
            {item?.receivers.length > 2 ? (
              <div>
                {item?.receivers[0]},{item?.receivers[1]} 외{" "}
                {item?.receivers.length - 2}명
              </div>
            ) : (
              <div>
                {item?.receivers[0]} {item?.receivers[1]}
              </div>
            )}
          </div>
          <div
            className="DocsShared"
            tw="min-w-[10rem] max-w-[10rem] my-3   text-center"
          >
            <span>{item.createdDate.slice(0, 10)}</span>
            {/* {item.createdDate.slice(11, 16)} */}
          </div>
          <div
            className="DocsDeadline"
            tw="min-w-[10rem] max-w-[10rem]  my-3 text-center"
          >
            {item?.templateDeadline}
          </div>
          <div className="Doctrash" tw="mx-2 mt-2 px-2">
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2 hover:scale-90 hover:text-orange-400 `}
              onClick={() => {
                handleDeleteSend();
              }}
            />
          </div>
        </div>
      </div>
    );
  });
  const receiveList = receiveData?.map((item: receiveDataItem, i: number) => {
    const token = authState.authToken;

    const handleDeleteReceive = () => {
      if (token) {
        deleteReceive(item.receiverIdx, token)
          .then(() => {
            // console.log("request", request.data);
            window.location.reload();
          })
          .catch((e) => console.log(e));
      }
    };
    return (
      <div className="FileItem" tw="flex flex-row" key={i}>
        <div className="DocsName" tw="min-w-[16rem] max-w-[20rem]  mx-4 my-3">
          <div>
            <span>{item.receiverDocsName}</span>
          </div>
        </div>
        <div className="DocsSender" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3  text-center"
          >
            {item?.receiverSenderName}
          </div>
          <div
            className="DocsShared"
            tw="min-w-[10rem] max-w-[10rem] my-3   text-center"
          >
            {item?.updatedDate.slice(0, 10)}
          </div>
          <div
            className="DocsDeadline"
            tw="min-w-[10rem] max-w-[10rem]  my-3 text-center"
          >
            {item?.receiverDeadline}
          </div>
          <div className="Doctrash" tw="mx-2 mt-2 px-2">
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2 hover:scale-90 hover:text-orange-400`}
              onClick={() => {
                handleDeleteReceive();
              }}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      className="FileList"
      tw="border-2 min-w-[60rem] max-w-[60rem] flex flex-col "
    >
      {header === "보낸 문서함" ? <div>{sendList} </div> : null}
      {header === "받은 문서함" ? <div>{receiveList} </div> : null}
    </div>
  );
};

export default DocsList;
