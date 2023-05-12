/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AddressBox,
  Auth, // Test,
  DocsBox,
  Editor,
  EditorCreate,
  EditorEdit,
  EditorFinish,
  EditorInvite,
  Home,
  Intro, // DocsBox,
  SendBox,
  Setting,
  SignIn,
  SignUp,
} from "@/pages";

// import DocsBox from "@/pages/Home/DocsBox/DocsBox";
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
          path: "/home/mybox/receive",
          element: <DocsBox />,
        },
        {
          path: "/home/mybox/send",
          element: <SendBox />,
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
          element: <EditorEdit />,
        },
        {
          path: "invite",
          element: <EditorInvite />,
        },
        {
          path: "finish",
          element: <EditorFinish />,
        },
      ],
    },
    // {
    //   path: "/test",
    //   element: <Test />,
    // },
  ]!,
);

export default router;
