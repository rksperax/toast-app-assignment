import React from "react";

//library

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// components

import App from "./components/App/App";

import { store } from "./redux";

// assets
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
