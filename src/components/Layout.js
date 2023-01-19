import React from "react";
import { Outlet } from "react-router-dom";
import Discover from "./Discover/Discover";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import MostSolid from "./MostSolid/MostSolid";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
