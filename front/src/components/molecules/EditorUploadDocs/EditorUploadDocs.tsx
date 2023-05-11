import UploadButton from "@/assets/UploadButton.png";
import deleteButton from "@/assets/deleteButton.png";
import { Image } from "@/components/atoms";

import { UploadBox, UploadDocs } from "./EditorUpdloadDocs.styled";

import { ChangeEvent, useState } from "react";

// import tw from "twin.macro";

const EditorUploadDocs = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
    setFileUrl(null);
  };

  const fileSize = file && Math.round(file.size / 1024);

  return (
    <UploadDocs>
      <div tw="flex ml-8 my-4 font-bold">
        <div tw="mr-4">문서 업로드</div>
        <div tw="mr-2 cursor-pointer">
          <label htmlFor="file-input">
            <Image imageUrl={UploadButton} />
            <input
              id="file-input"
              type="file"
              accept=".docx,.jpeg,.jpg,.png,.pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
        {file !== null ? (
          <div tw="cursor-pointer" onClick={handleFileDelete}>
            <Image imageUrl={deleteButton} />
          </div>
        ) : null}
      </div>
      <UploadBox>
        {file === null ? (
          <div>
            <p>
              <i className="fi-rs-cloud-upload"></i> upload할 파일(docs, pdf,
              png, jpg)을
            </p>
            <p>여기에 끌어다 놓거나 또는 upload 버튼을 누르세요.</p>
          </div>
        ) : null}
        {fileUrl?.endsWith(".jpg") ? (
          <iframe src={fileUrl} width="800" height="600" title="Preview" />
        ) : null}
        {file !== null ? (
          <div>
            <p>{file.name}</p>
            <p>{fileSize}KB</p>
          </div>
        ) : null}
      </UploadBox>
    </UploadDocs>
  );
};

export default EditorUploadDocs;
