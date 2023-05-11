import { Button, Icon, TextInput } from "@/components/atoms";

import { useState } from "react";
import tw from "twin.macro";

const DocsList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const [editFile, setEditFile] = useState("");

  return (
    <div className="FileList" tw="border-2 min-w-[64rem] flex flex-col ">
      <div className="FileItem" tw="flex flex-row">
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>
        <div className="DocsName" tw="min-w-[20rem] max-w-[20rem]  mx-4 my-3">
          {isEdit === false ? (
            <div>
              <span>삼성 청년 SW 아카데미 문서.docx</span>{" "}
              <Icon
                icon="fi-rr-edit"
                size="sm"
                custom={tw`mx-4`}
                onClick={() => {
                  handleEdit();
                  console.log("이름변경");
                }}
              />
            </div>
          ) : (
            <div tw="flex flex-row">
              <TextInput
                variant="primary"
                custom={tw`border-2 rounded-sm`}
                onChange={() => console.log("문서이름 변경")}
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
            <Icon
              icon=" fi-rr-trash"
              custom={tw`mx-2 px-2`}
              onClick={() => console.log("삭제")}
            />
          </div>
        </div>
      </div>
      <div className="FileItem" tw="flex flex-row">
        <div tw="mx-4 my-3">
          <input type="checkbox" />
        </div>
        <div className="DocsName" tw="min-w-[20rem] max-w-[20rem] mx-4 my-3">
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
  );
};

export default DocsList;
