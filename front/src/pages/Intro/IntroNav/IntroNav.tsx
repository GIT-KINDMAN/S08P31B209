import type { RootState } from "@store/store";

import { logout } from "@/apis/memberAPI";
import Logo from "@/assets/DocDoc.png";
import { Button, Image } from "@/components/atoms";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const IntroNav = () => {
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);
  console.log(authState);
  return (
    <div
      className="NavBar"
      tw="z-50 fixed w-full top-0 flex justify-between bg-gradient-to-b from-lightgray-600  "
    >
      <Image imageUrl={Logo} />
      {authState.authToken === null ? (
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
      ) : (
        <Button
          className="LogoutBtn"
          fontSize="lg"
          // isOutline={tqrue}
          variant={"secondary"}
          isBold={true}
          // tw="m-2 p-2 rounded-[0.5rem] bg-gray-400"
          custom={tw`justify-center m-4 p-2 rounded-[0.5rem] text-sliver-700 `}
          onClick={() => {
            logout()
              .then((request) => console.log("로그아웃", request.data))
              .then(() => navigate("/auth"))
              .catch((e) => console.log(e));
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default IntroNav;
