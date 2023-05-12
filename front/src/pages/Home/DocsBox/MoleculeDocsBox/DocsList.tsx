import { Button, Icon, TextInput } from "@/components/atoms";

import { useState } from "react";
// import { useEffect } from "react";
import tw from "twin.macro";

const DocsList = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const [editFile, setEditFile] = useState("");

  return (
    <div
      className="FileList"
      tw="border-2 min-w-[60rem] max-w-[60rem] flex flex-col "
    >
      <div className="FileItem" tw="flex flex-row">
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>
        <div className="DocsName" tw="min-w-[20rem] max-w-[20rem]  mx-4 my-3">
          {isOpenEdit === false ? (
            <div>
              <span>삼성 청년 SW 아카데미 문서.docx</span>{" "}
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
        <div className="DocsStatus" tw="flex  my-auto">
          <div
            className="DocsEdit"
            tw="min-w-[10rem] max-w-[10rem]  my-3  grid grid-cols-1 text-center"
          >
            2023-05-10
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
            2023-05-11
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
    </div>
  );
};

export default DocsList;
