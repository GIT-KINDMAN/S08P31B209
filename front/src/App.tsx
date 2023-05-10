import router from "@/routers/router";
import { store } from "@/store/store";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
