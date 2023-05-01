import "twin.macro";
import { useState } from "react";
// import HomeHeader from "@/components/organisms/homeHeader";
import { Button, TextArea, Radio } from "@/components/atoms";

const Test = () => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      {/* <HomeHeader label="Test Page" /> */}

      <main>
        <Button icon="book" label="book button"></Button>
        <TextArea variant="text" />
        <TextArea variant="password" />
        <TextArea variant="edit" />
        <div>
          <Radio checked={checked} onChange={handleRadioChange}></Radio>
          <Radio checked={!checked} onChange={handleRadioChange}></Radio>
        </div>
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Test;
