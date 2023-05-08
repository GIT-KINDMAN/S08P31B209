/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EditorContent } from "@/components/organisms";
import {
  AddressBox,
  Auth,
  DocsBox,
  Editor,
  Home,
  Intro,
  Setting,
  SignIn,
  SignUp,
  Test,
} from "@/pages";
import EditorCreate from "@/pages/Editor/EditorCreate/EditorCreate";

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
        {
          path: "edit",
          element: <EditorContent />,
        },
        {
          path: "invite",
          element: <EditorCreate />,
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
