// import HomeHeader from "@/components/organisms/homeHeader";
import {
  // Button,
  CheckBox,
  Radio,
  TableHeader,
  TextArea,
  TextBox,
} from "@/components/atoms";
import { TableViewHeader, TableViewRow } from "@/components/molecules";

import { useState } from "react";
import "twin.macro";

const Test = () => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };

  const handleCheckClick = () => {
    setChecked(!checked);
  };

  return (
    <>
      {/* <HomeHeader label="Test Page" /> */}

      <main>
        <TableViewHeader
          checked={checked}
          isBookmarkActive={true}
          size="lg"
          isAsc={true}
          labels={["문서이름", "상태", "문서보관일", "문서마감일", "더보기"]}
          onClick={handleCheckClick}
        ></TableViewHeader>
        <TableViewRow
          icon="folder"
          checked={true}
          isBookmarkActive={true}
          size="lg"
          labels={["문서이름", "상태", "문서보관일", "문서마감일", "더보기"]}
          onClick={handleCheckClick}
        />
        <TableViewRow
          icon="star"
          checked={true}
          isBookmarkActive={true}
          size="lg"
          labels={["문서이름", "상태", "문서보관일", "문서마감일", "더보기"]}
          onClick={handleCheckClick}
        />
        <TableViewRow
          checked={true}
          isBookmarkActive={true}
          size="lg"
          labels={["문서이름", "상태", "문서보관일", "문서마감일", "더보기"]}
          onClick={handleCheckClick}
        />
        <CheckBox
          checked={checked}
          icon="check"
          onClick={handleCheckClick}
        ></CheckBox>
        {/* <Button icon="book" label="book button"></Button> */}
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
