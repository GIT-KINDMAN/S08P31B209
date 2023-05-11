import Logo from "@/assets/DocDoc.png";
import { Button, Image } from "@/components/atoms";

import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const IntroNav = () => {
  const navigate = useNavigate();

  return (
    <div
      className="NavBar"
      tw="z-50 fixed w-full top-0 flex justify-between bg-gradient-to-b from-lightgray-600  "
    >
      <Image imageUrl={Logo} />
      <Button
        className="SignInBtn"
        fontSize="lg"
        // isOutline={tqrue}
        variant={"secondary"}
        isBold={true}
        // tw="m-2 p-2 rounded-[0.5rem] bg-gray-400"
        custom={tw`justify-center m-4 p-2 rounded-[0.5rem] text-sliver-700 `}
        onClick={() => navigate("/auth")}
      >
        Login
      </Button>
    </div>
  );
};

export default IntroNav;
