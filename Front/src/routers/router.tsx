/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DocsBox, Editor, Home, MainPage, Test } from "@/pages";
import ErrorPage from "@/pages/error/errorPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/mybox",
      element: <DocsBox />,
    },
    {
      path: "/editor",
      element: <Editor />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]!,
);

export default router;
