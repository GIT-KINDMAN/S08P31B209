// import HomeHeader from "@/components/organisms/homeHeader";
import { Button, Radio, TableHeader, TextArea } from "@/components/atoms";
import { TableViewHeader } from "@/components/molecules";

import { useState } from "react";
import "twin.macro";

const Test = () => {
  const [checked, setChecked] = useState(false);

  const handleTableHeaderChange = (isChecked: boolean) => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      {/* <HomeHeader label="Test Page" /> */}

      <main>
        <TableViewHeader
          checked={checked}
          icon="check"
          onChange={handleTableHeaderChange}
        ></TableViewHeader>
        <Button icon="book" label="book button"></Button>
        <TextArea variant="number" />
        <TextArea variant="password" />
        <TextArea variant="edit" />
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
