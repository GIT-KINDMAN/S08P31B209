/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AddressBox,
  Auth,
  DocsBox,
  FindPassword,
  Home,
  Intro,
  Login,
  PasswordReset,
  Register,
  Setting,
} from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "find-password",
          element: <FindPassword />,
        },
        {
          path: "password-reset",
          element: <PasswordReset />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "/home",
          element: <DocsBox />,
        },
        {
          path: "/home/mybox",
          element: <DocsBox />,
        },
        {
          path: "/home/address",
          element: <AddressBox />,
        },
        {
          path: "/home/setting",
          element: <Setting />,
        },
      ],
    },
  ]!,
);

export default router;
