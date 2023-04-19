import React from "react";

//library
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// components

//@ts-ignore
import App from "./components/App/App";
//@ts-ignore
import { store } from "./redux";

// assets
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
