import { CheckBox } from "@/components/atoms";
import { InputProps } from "@/components/atoms/CheckBox/CheckBox.types";

export const TableViewHeader = ({ checked, icon, onChange }: InputProps) => {
  return (
    <div tw="pl-2 h-9 flex items-center">
      <CheckBox checked={checked} icon={icon} onChange={onChange}></CheckBox>
    </div>
  );
};

export default TableViewHeader;
