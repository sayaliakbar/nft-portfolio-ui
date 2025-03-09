import React from "react";

import { Navbar, Footer } from "../components";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="yorfy">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
