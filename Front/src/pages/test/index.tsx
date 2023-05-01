import "twin.macro";
import HomeHeader from "@/components/organisms/homeHeader";
import { Button } from "@/components/atoms";

const Test = () => {
  return (
    <>
      <HomeHeader label="Test Page" />
      <main>
        <Button icon="book" label="book button"></Button>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Test;
