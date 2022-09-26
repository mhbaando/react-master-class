import { IMenu } from "@/Interfaces/interfaces";

const isRouteActive = (route: string): boolean => {
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};

const useMenu = (): IMenu[] => {
  const Menu = [
    {
      lable: "About",
      route: "/about",
      isActive: isRouteActive("/about"),
    },
    {
      lable: "Blog",
      route: "/blog",
      isActive: isRouteActive("/blog"),
    },
    {
      lable: "Contacts",
      route: "/contacts",
      isActive: isRouteActive("/contacts"),
    },
  ];

  return Menu;
};
export default useMenu;
