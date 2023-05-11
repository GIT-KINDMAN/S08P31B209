import Logo from "@/assets/DocDoc.png";
import { Image, Label, TextInput } from "@/components/atoms";

import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <>
      <div tw="min-w-[60rem] max-w-[80rem]">
        <div className="AuthHeader" tw="flex justify-center">
          <Image imageUrl={Logo} onClick={() => navigate("/")} />
        </div>
        <div className="ContentWrap" tw="flex w-full justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Auth;
