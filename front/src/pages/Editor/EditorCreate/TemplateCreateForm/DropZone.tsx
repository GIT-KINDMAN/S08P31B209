import { setFile } from "@store/slice/imageViewSlice";

import { ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";

type IProps = {
  children: ReactNode;
};

const Dropzone = ({ children }: IProps) => {
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        console.log(reader.result);
        dispatch(
          setFile({
            name: file.name,
            type: file.type,
            size: file.size,
            data: reader.result,
          }),
        );
      };
      reader.readAsDataURL(file);
    },
    [dispatch],
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};
export default Dropzone;
