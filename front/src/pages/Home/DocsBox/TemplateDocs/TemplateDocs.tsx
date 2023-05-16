import DocsHeader from "../MoleculeDocsBox/DocsHeader";
import DocsList from "../MoleculeDocsBox/DocsList";
import { receiveDataItem, sendDataItem } from "../MoleculeDocsBox/DocsList";
import DocsListHeader from "../MoleculeDocsBox/DocsListHeader";

export interface HeaderProps {
  header?: string;
  sendData?: sendDataItem[];
  receiveData?: receiveDataItem[];
}

const TemplateDocs = ({ header, sendData, receiveData }: HeaderProps) => {
  return (
    <div
      className="SendBoxForm"
      tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
    >
      <DocsHeader header={header} />
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
