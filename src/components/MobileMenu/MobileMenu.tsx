import "./MobileMenu.scss";
import { NavLink } from "react-router-dom";
import { MenuCloseIcon, MenuIcon, menuIcon } from "../../assets/svg";
import { useMenu } from "../../hooks/useMenu";
import { useState } from "react";
import { User } from "../User/User";
import { user } from "../../utils/constants";
type TKeyMenuIcons = keyof typeof menuIcon;

export const MobileMenu = () => {
  const { onChangeActiveMenuItem, getClassName, menuList } = useMenu();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onChangeOpenMenu = () => {
    setIsOpenMenu((pre) => !pre);
  };

  const onChangeMobileMenu = (menuItem: string) => () => {
    onChangeActiveMenuItem(menuItem);
    setIsOpenMenu(false);
  };

  return (
    <aside>
      <User {...user} className="user-mobile" />
      <menu className={`mobile-menu ${isOpenMenu ? "open-menu" : ""}`}>
        {!isOpenMenu && (
          <MenuIcon className="menu-icon" onClick={onChangeOpenMenu} />
        )}
        {isOpenMenu && (
          <MenuCloseIcon
            className="menu-close-icon"
            onClick={onChangeOpenMenu}
          />
        )}

        <div className={`menu-list ${isOpenMenu ? "appear-menu-list" : ""}`}>
          {menuList.map((menuItem) => (
            <NavLink key={menuItem} to={menuItem.toLowerCase()}>
              <li
                className={getClassName(menuItem)}
                onClick={onChangeMobileMenu(menuItem)}
              >
                <div className="menu-item">
                  <div className="menu-item-icon">
                    {menuIcon[menuItem as TKeyMenuIcons]}
                  </div>

                  <div className="menu-text">{menuItem}</div>
                </div>
              </li>
            </NavLink>
          ))}
        </div>
      </menu>
    </aside>
  );
};
