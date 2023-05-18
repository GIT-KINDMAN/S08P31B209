import type { RootState } from "@store/store";

import { deleteReceive, deleteSend } from "@/apis/boxAPI";
import { Icon } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

// import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // 문서 리스트 출력
  const sendList = sendData?.map((item: sendDataItem, i: number) => {
    const token = authState.authToken;

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
            <span
              tw="cursor-pointer"
              onClick={() => navigate(`/home/mybox/send/${item.templateIdx}`)}
            >
              {item.templateName}
            </span>
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
      {header === "보낸 문서함" ? (
        <div tw="overflow-y-auto min-h-[28rem] max-h-[28rem]">{sendList} </div>
      ) : null}
      {header === "받은 문서함" ? (
        <div tw="overflow-y-auto min-h-[28rem] max-h-[28rem]">
          {receiveList}
        </div>
      ) : null}
    </div>
  );
};

export default DocsList;
