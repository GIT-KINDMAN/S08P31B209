// import HomeHeader from "@/components/organisms/homeHeader";
import {
  Button,
  CheckBox,
  Radio,
  TableHeader,
  TextArea,
  TextBox,
} from "@/components/atoms";
import { TableView } from "@/components/molecules";

import { useState } from "react";
import "twin.macro";

const Test = () => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      {/* <HomeHeader label="Test Page" /> */}

      <main>
        <TableView checked={checked} icon="check"></TableView>
        <CheckBox checked={checked} icon="check"></CheckBox>
        <Button icon="book" label="book button"></Button>
        <TextArea variant="number" />
        <TextArea variant="password" />
        <TextArea variant="edit" />
        <TextBox size="md" label="문서 이름" isAsc={checked}></TextBox>
        <div>
          <Radio
            checked={checked}
            onChange={handleRadioChange}
            label={"남자"}
          ></Radio>
          <Radio
            checked={!checked}
            onChange={handleRadioChange}
            label={"여자"}
          ></Radio>
          <TableHeader label="보관함"></TableHeader>
        </div>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Test;
