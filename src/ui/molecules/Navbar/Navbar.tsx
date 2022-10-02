import { Navigate, NavLink } from "react-router-dom";
import "./Navbar.scss";

import useMenu from "@/hooks/useMenu";
import Socials from "@/ui/atoms/Socials";
import Menus from "@/ui/atoms/Menus";

const Navbar: React.FC = (): React.ReactElement => {
  const menu = useMenu();
  return (
    <>
      <div className="navbar">
        <div className="navbar__title">
          <NavLink to="/">Mohamud</NavLink>
        </div>
        <Socials />
      </div>
      <Menus />
    </>
  );
};

export default Navbar;
