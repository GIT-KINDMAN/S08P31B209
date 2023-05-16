import { Button, Icon, TextInput } from "@/components/atoms";

import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import { useState } from "react";
// import { useEffect } from "react";
import tw from "twin.macro";

export interface receiveDataItem {
  receiverDocsName: string;
  receiverDeadline: string;
  receiverEmail: string;
  receiverName: string;
  receiverSenderEmail: string;
  receiverSenderName: string;
  template: object;
}

export interface sendDataItem {
  createdDate: string;
  member: memberType;
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

  // 문서 리스트 출력
  const sendList = sendData?.map((item: sendDataItem, i: number) => {
    console.log(item);
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
        <div className="DocsReceiver" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3  grid grid-cols-1 text-center"
          >
            {item?.member.memberName}
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
            {item?.templateDeadline}
          </div>
          <div className="Doctrash" tw="mx-2 mt-2 px-2">
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2`}
              onClick={() => console.log("삭제")}
            />
          </div>
        </div>
      </div>
    );
  });
  const receiveList = receiveData?.map((item: receiveDataItem, i: number) => {
    console.log(item);
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
              onClick={() => console.log("삭제")}
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
