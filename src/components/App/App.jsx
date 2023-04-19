// core
import React from "react";

// library
import { Routes, Route, BrowserRouter } from "react-router-dom";

// components
import { routes } from "./routes";
import { Main, Special, PlaceOrder, Beverages, Desserts } from "../pages";

// assets
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Special />} />

          <Route path={routes.main} element={<Main />} />
          <Route path={routes.special} element={<Special />} />

          <Route path={routes.placeOrder} element={<PlaceOrder />} />
          <Route path={routes.beverages} element={<Beverages />} />
          <Route path={routes.desserts} element={<Desserts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
