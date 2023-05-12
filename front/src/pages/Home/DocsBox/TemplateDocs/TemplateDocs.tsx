import DocsHeader from "../MoleculeDocsBox/DocsHeader";
import DocsList from "../MoleculeDocsBox/DocsList";
import DocsListHeader from "../MoleculeDocsBox/DocsListHeader";

export interface HeaderProps {
  header?: string;
}

const TemplateDocs = ({ header }: HeaderProps) => {
  return (
    <div
      className="SendBoxForm"
      tw="flex flex-col w-full min-w-[40rem] px-6 py-4 bg-white"
    >
      <DocsHeader header={header} />
      <DocsListHeader />
      {/* 문서리스트 */}
      <DocsList />
    </div>
  );
};

export default TemplateDocs;
