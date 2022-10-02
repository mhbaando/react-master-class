import React from "react";
import { ILayout } from "@/Interfaces/interfaces";
import "./Layout.scss";
import Navbar from "@/ui/molecules/Navbar/Navbar";
import Footer from "@/ui/molecules/Footer/Footer";

const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Navbar />
        <div>{children}</div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
