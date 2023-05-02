import { CheckBox, Icon, TextBox } from "@/components/atoms";
import { InputProps } from "@/components/atoms/CheckBox/CheckBox.types";

import "twin.macro";

export const TableView = ({ checked, icon, onChange }: InputProps) => {
  return (
    <div tw="pl-2 h-9 flex items-center space-x-2">
      <CheckBox checked={checked} icon={icon} onChange={onChange} />
      <Icon icon="star" size="xl" iconType="sr" iconColor="#F4AE4F" />
      <TextBox size="xl" label="문서 이름" isAsc={true} onChange={onChange} />
      <TextBox size="xl" label="상태" onChange={onChange} />
      <TextBox size="xl" label="문서 수정일" isAsc={true} onChange={onChange} />
      <TextBox size="xl" label="문서 마감일" isAsc={true} onChange={onChange} />
      <TextBox size="xl" label="더보기" onChange={onChange} />
    </div>
  );
};

export default TableView;
