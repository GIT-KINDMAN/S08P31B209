/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EditorContent } from "@/components/organisms";
import {
  AddressBox,
  Auth,
  DocsBox,
  Editor,
  Home,
  Intro,
  Register,
  Setting,
  SignIn,
  Test,
} from "@/pages";

import EditorCreate from "../components/organisms/EditorCreate/EditorCreate";

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
    {
      path: "/editor",
      element: <Editor />,
      children: [
        {
          path: "create",
          element: <EditorCreate />,
        },
        {
          path: "edit",
          element: <EditorContent />,
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
