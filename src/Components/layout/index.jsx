import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
