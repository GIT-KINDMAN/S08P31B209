import Logo from "@/assets/DocDoc.png";

import { Outlet } from "react-router-dom";
import "twin.macro";

const Auth = () => {
  return (
    <>
      <div>
        <div className="AuthHeader" tw="flex justify-center">
          <img src={Logo} />
        </div>
        <div tw="flex w-full justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Auth;
