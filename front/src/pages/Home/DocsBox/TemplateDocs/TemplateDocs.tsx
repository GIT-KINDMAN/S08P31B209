import DocsHeader from "../MoleculeDocsBox/DocsHeader";
import DocsList from "../MoleculeDocsBox/DocsList";
import { receiveDataItem, sendDataItem } from "../MoleculeDocsBox/DocsList";
import DocsListHeader from "../MoleculeDocsBox/DocsListHeader";

// import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  header?: string;
  sendData?: sendDataItem[];
  receiveData?: receiveDataItem[];
}

const TemplateDocs = ({ header, sendData, receiveData }: HeaderProps) => {
  // const navigate = useNavigate();

  return (
    <div
      className="SendBoxForm"
      tw="flex flex-col w-full min-w-[60rem] px-6 py-4 bg-white"
    >
      <DocsHeader header={header} />

      <div tw="min-w-[1rem] my-8"></div>
      <DocsListHeader header={header} />
      {/* 문서리스트 */}
      {sendData ? <DocsList sendData={sendData} header={header} /> : null}

      {receiveData ? (
        <DocsList receiveData={receiveData} header={header} />
      ) : null}
    </div>
  );
};

export default TemplateDocs;
