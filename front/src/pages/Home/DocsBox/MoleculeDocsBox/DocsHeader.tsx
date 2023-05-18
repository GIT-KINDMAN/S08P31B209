import { HeaderProps } from "../TemplateDocs/TemplateDocs";

import "twin.macro";

const DocsHeader = ({ header }: HeaderProps) => {
  return (
    <div className="Header ">
      <label tw="text-3xl">{header}</label>
      <hr tw="my-2 min-w-[64rem] max-w-[64rem]  border-t-2 border-blue-600"></hr>
    </div>
  );
};

export default DocsHeader;
