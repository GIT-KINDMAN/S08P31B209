import { EditorContent } from "@/components/organisms";
import { Editor } from "@/pages/index";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/editor",
    element: <Editor />,
    children: [
      {
        path: "/editor/create",
        element: <></>,
      },
      {
        path: "/editor/edit",
        element: <Editor />,
      },
    ],
  },
]);

export default router;
