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
              const headers = { Authorization: `Bearer ${token}` };
              console.log(headers.Authorization);
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
