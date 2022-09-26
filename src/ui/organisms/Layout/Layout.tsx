import React from "react";
import { ILayout } from "@/Interfaces/interfaces";
import "./Layout.scss";
import Navbar from "@/ui/molecules/Navbar/Navbar";

const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Navbar />
        <div>{children}</div>
      </div>

      <div>footer</div>
    </div>
  );
};

export default Layout;
