import { Auth, FindPassword, Login, PasswordReset, Register } from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
]);

export default router;
