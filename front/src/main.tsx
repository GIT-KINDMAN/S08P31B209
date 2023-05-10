/* eslint-disable @typescript-eslint/no-non-null-assertion */
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
