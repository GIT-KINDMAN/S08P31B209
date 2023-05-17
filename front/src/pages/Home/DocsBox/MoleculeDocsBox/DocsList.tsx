import type { RootState } from "@store/store";

import { deleteReceive, deleteSend } from "@/apis/boxAPI";
import { Button, Icon, TextInput } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import { useState } from "react";
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
  template: object;
}

export interface sendDataItem {
  createdDate: string;
  member: memberType;
  receivers: string[];
  templateDeadline: string;
  templateIdx: number;
  templateName: string;
  templatefile: object;
  updatedDate: string;
}

interface memberType {
  memberEmail: string;
  memberName: string;
}

const DocsList = ({ header, sendData, receiveData }: HeaderProps) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  // 문서이름 변경
  const [editFile, setEditFile] = useState("");
  const authState = useSelector((state: RootState) => state.auth);

  // 문서 리스트 출력
  const sendList = sendData?.map((item: sendDataItem, i: number) => {
    const token = authState.authToken;
    const handleDeleteSend = () => {
      if (token) {
        deleteSend(item.templateIdx, token)
          .then(() => {
            // console.log("request", request);
            window.location.reload();
          })
          .catch((e) => console.log(e));
      }
    };
    return (
      <div className="FileItem" tw="flex flex-row" key={i}>
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>
        <div className="DocsName" tw="min-w-[20rem] max-w-[20rem]  mx-4 my-3">
          {isOpenEdit === false ? (
            <div>
              <span>{item.templateName}</span>
              <Icon
                icon="fi-rr-edit"
                size="sm"
                custom={tw`mx-4`}
                onClick={() => {
                  handleOpenEdit();
                }}
              />
            </div>
          ) : (
            <div tw="flex flex-row">
              <TextInput
                variant="primary"
                custom={tw`border-2 rounded-sm`}
                onChange={(e) => {
                  setEditFile(e.target.value);
                  console.log(editFile);
                }}
              />
              <Button
                variant="secondary"
                isOutline={true}
                custom={tw`px-2 mx-1`}
                onClick={handleOpenEdit}
              >
                x
              </Button>
              <Button
                variant="primary"
                custom={tw`px-2 mx-1`}
                onClick={handleOpenEdit}
              >
                O
              </Button>
            </div>
          )}
        </div>
        <div className="DocsReceiver" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3  grid grid-cols-1 text-center"
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
            tw="min-w-[10rem] max-w-[10rem] my-3  grid grid-cols-1 text-center"
          >
            <span>{item.createdDate.slice(0, 10)}</span>
            {/* {item.createdDate.slice(11, 16)} */}
          </div>
          <div
            className="DocsDeadline"
            tw="min-w-[10rem] max-w-[10rem] grid grid-cols-1 my-3 text-center"
          >
            {item?.templateDeadline}
          </div>
          <div className="Doctrash" tw="mx-2 mt-2 px-2">
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2`}
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
          .then((request) => {
            console.log("request", request.data);
            window.location.reload();
          })
          .catch((e) => console.log(e));
      }
    };
    return (
      <div className="FileItem" tw="flex flex-row" key={i}>
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>
        <div className="DocsName" tw="min-w-[20rem] max-w-[20rem]  mx-4 my-3">
          {isOpenEdit === false ? (
            <div>
              <span>{item.receiverDocsName}</span>
              <Icon
                icon="fi-rr-edit"
                size="sm"
                custom={tw`mx-4`}
                onClick={() => {
                  handleOpenEdit();
                  console.log("이름변경");
                }}
              />
            </div>
          ) : (
            <div tw="flex flex-row">
              <TextInput
                variant="primary"
                custom={tw`border-2 rounded-sm`}
                onChange={(e) => {
                  setEditFile(e.target.value);
                  console.log(editFile);
                }}
              />
              <Button
                variant="secondary"
                isOutline={true}
                custom={tw`px-2 mx-1`}
                onClick={handleOpenEdit}
              >
                x
              </Button>
              <Button
                variant="primary"
                custom={tw`px-2 mx-1`}
                onClick={handleOpenEdit}
              >
                O
              </Button>
            </div>
          )}
        </div>
        <div className="DocsSender" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3  grid grid-cols-1 text-center"
          >
            {item?.receiverSenderName}
          </div>
          <div
            className="DocsShared"
            tw="min-w-[10rem] max-w-[10rem] my-3  grid grid-cols-1 text-center"
          >
            2023-05-11
          </div>
          <div
            className="DocsDeadline"
            tw="min-w-[10rem] max-w-[10rem] grid grid-cols-1 my-3 text-center"
          >
            {item?.receiverDeadline}
          </div>
          <div className="Doctrash" tw="mx-2 mt-2 px-2">
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2`}
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
