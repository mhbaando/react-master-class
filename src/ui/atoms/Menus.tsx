import useMenu from "@/hooks/useMenu";
import React from "react";
import { NavLink, Navigate } from "react-router-dom";

interface MenusProps {
  class: string;
}
const Menus: React.FC = (): React.ReactElement => {
  const menu = useMenu();
  return (
    <div className="menu">
      {menu.map((menuItem) => (
        <NavLink
          to={menuItem.route}
          key={menuItem.route}
          className={`menu__item${menuItem.isActive ? "--active" : ""}`}
          onClick={() => <Navigate to={menuItem.route} replace={true} />}
        >
          {menuItem.lable}
        </NavLink>
      ))}
    </div>
  );
};
export default Menus;
