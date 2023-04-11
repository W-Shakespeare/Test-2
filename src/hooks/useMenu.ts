import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const menuList = [
  "Dashboard",
  "Product",
  "Customers",
  "Income",
  "Promote",
  "Help",
];

export const useMenu = () => {
  const location = useLocation();
  const pathnameWitOutSlash = location.pathname.substring(1);
  const [activeMenuItem, setActiveMenuItem] = useState(pathnameWitOutSlash);

  useEffect(() => {
    setActiveMenuItem(pathnameWitOutSlash);
  }, [location]);

  const onChangeActiveMenuItem = (menuItem: string) => () => {
    setActiveMenuItem(menuItem);
  };

  const getClassName = (menuItem: string) =>
    `wrapper-menu-item ${
      activeMenuItem === menuItem.toLowerCase() ? "active-menu" : ""
    }`;

  return { onChangeActiveMenuItem, getClassName, menuList };
};
