import { NavLink, useLocation } from "react-router-dom";
import { ArrowIcon, Logo, menuIcon } from "../../assets/svg";
import { useMenu } from "../../hooks/useMenu";
import { user } from "../../utils/constants";
import { User } from "../User/User";

import "./Menu.scss";

type TKeyMenuIcons = keyof typeof menuIcon;

export const Menu = () => {
  const { onChangeActiveMenuItem, getClassName, menuList } = useMenu();

  const isNotFirstLink = (idx: number) => idx !== 0;
  return (
    <>
      <menu className="menu">
        <div className="logo">
          <Logo />
          <div className="logo__text">Dashboard</div>
          <div className="logo__text--small-text">v.01</div>
        </div>
        {menuList.map((menuItem, idx) => (
          <NavLink key={menuItem} to={menuItem.toLowerCase()}>
            <li
              className={getClassName(menuItem)}
              onClick={onChangeActiveMenuItem(menuItem)}
            >
              <div className="menu-item">
                <div className="menu-item-icon">
                  {menuIcon[menuItem as TKeyMenuIcons]}
                </div>

                <div className="menu-text">{menuItem}</div>
              </div>
              {isNotFirstLink(idx) && <ArrowIcon />}
            </li>
          </NavLink>
        ))}
      </menu>

      <User {...user} />
    </>
  );
};
