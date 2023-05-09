/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AddressBox,
  Auth,
  DocsBox,
  Editor,
  EditorCreate,
  EditorInvite, // EditorEdit,
  Home,
  Intro,
  Setting,
  SignIn,
  SignUp,
  Test,
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
          path: "/auth",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
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
    {
      path: "/editor",
      element: <Editor />,
      children: [
        {
          path: "/editor",
          element: <EditorCreate />,
        },
        {
          path: "create",
          element: <EditorCreate />,
        },
        // {
        //   path: "edit",
        //   element: <EditorEdit />,
        // },
        {
          path: "invite",
          element: <EditorInvite />,
        },
        {
          path: "finish",
          element: <EditorCreate />,
        },
      ],
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]!,
);

export default router;
