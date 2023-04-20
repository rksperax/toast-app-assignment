// core
import React from "react";

// library
import { useSelector } from "react-redux";

// components
import { Footer, Header } from "../";
import { getShowModal } from "../../../redux/app/selectors";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
