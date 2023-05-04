/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AddressBox, DocsBox, Home, Setting } from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
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
