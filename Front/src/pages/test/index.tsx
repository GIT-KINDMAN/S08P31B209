import "twin.macro";

// import HomeHeader from "@/components/organisms/homeHeader";
import { Button, TextArea } from "@/components/atoms";


const Test = () => {
  return (
    <>

      {/* <HomeHeader label="Test Page" /> */}

      <main>
        <Button icon="book" label="book button"></Button>
        <TextArea variant="text" />
        <TextArea variant="password" />
        <TextArea variant="edit" />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Test;
