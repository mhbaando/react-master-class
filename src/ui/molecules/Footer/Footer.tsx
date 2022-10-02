import useMenu from "@/hooks/useMenu";
import Menus from "@/ui/atoms/Menus";
import Socials from "@/ui/atoms/Socials";
import { Navigate, NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = (): React.ReactElement => {
  const menu = useMenu();
  return (
    <div className="footer">
      <div className="footer__menu">
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
      <Socials />
    </div>
  );
};
export default Footer;
