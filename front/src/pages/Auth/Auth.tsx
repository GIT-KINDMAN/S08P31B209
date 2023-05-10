import Logo from "@/assets/DocDoc.png";

import { Outlet, useNavigate } from "react-router-dom";
import "twin.macro";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="AuthHeader" tw="flex justify-center">
          <img src={Logo} onClick={() => navigate("/")} />
        </div>
        <div className="ContentWrap" tw="flex w-full justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Auth;
