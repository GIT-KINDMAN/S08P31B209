import { setAuth } from "@store/slice/authSlice";
import type { RootState } from "@store/store";

import { logout } from "@/apis/memberAPI";
import Logo from "@/assets/DocDoc.png";
import { Button, Image } from "@/components/atoms";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const IntroNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);
  const token = authState.authToken;
  // console.log("token", token);

  return (
    <div
      className="NavBar"
      tw="z-50 fixed w-full top-0 flex justify-between bg-gradient-to-b from-lightgray-600  "
    >
      <Image imageUrl={Logo} />
      {token ? (
        <div tw="flex ml-auto text-xl text-white items-center">
          <div
            tw="mx-12 cursor-pointer"
            onClick={() => navigate("/home/mybox/receive")}
          >
            보관함
          </div>
          <div
            tw="mx-12 cursor-pointer"
            onClick={() => navigate("/editor/create")}
          >
            문서 보내기
          </div>
          <div
            tw="mx-12 cursor-pointer"
            onClick={() => navigate("/home/address")}
          >
            주소록 관리
          </div>
        </div>
      ) : null}
      {token === null ? (
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
            if (token) {
              console.log(token);

              logout(token)
                .then((request) => {
                  console.log("logout:", request.data);
                  dispatch(setAuth(null));
                })
                .then(() => navigate("/auth"))
                .catch((e) => console.log(e));
            }
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default IntroNav;
