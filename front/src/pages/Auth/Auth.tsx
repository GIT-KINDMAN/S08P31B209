import Logo from "@/assets/DocDoc.png";
import { Image } from "@/components/atoms";

import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <>
      <div tw="min-w-[60rem]">
        <div tw="flex justify-center">
          <Image
            tw="cursor-pointer"
            imageUrl={Logo}
            onClick={() => navigate("/")}
          />
        </div>
        <div tw="flex w-full justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Auth;
