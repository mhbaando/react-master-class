import { Navigate, NavLink } from "react-router-dom";
import useMenu from "@/hooks/useMenu";

import "./Navbar.scss";
const Navbar: React.FC = (): React.ReactElement => {
  const menu = useMenu();
  return (
    <>
      <div className="navbar">
        <div className="navbar__title">
          <NavLink to="/">Mohamud</NavLink>
        </div>
        <div className="navbar__socials">Social Links</div>
      </div>
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
    </>
  );
};

export default Navbar;
