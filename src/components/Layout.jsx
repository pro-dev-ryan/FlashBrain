import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const cardData = useLoaderData();
  console.log(cardData);
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
