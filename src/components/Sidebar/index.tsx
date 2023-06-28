import React from "react";
import Style from "./Sidebar.style";
import { Link, useLocation } from "react-router-dom";
import sidebar from "routes/sidebar";
import { useDispatch } from "react-redux";
import { changeActivePath } from "store/reducers/navigation";

function Sidebar() {
  const { pathname } = useLocation();
  // const dispatch = useDispatch();

  // const onPathChanged = (path: string) => {
  //   dispatch(changeActivePath(path));
  // };

  return (
    <Style>
      <nav className="header__nav">
        <ul className="header__list">
          {sidebar.map((route) => {
            const isRouteActive = route.path === pathname;
            return (
              <li className="header__list-item" key={route.path}>
                <Link
                  className={`header__link ${
                    isRouteActive && "header__link--active"
                  }`}
                  to={route.path}
                  // onClick={() => onPathChanged(route.path)}
                >
                  {route.icon}
                  <span className="header__link-text">{route.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Style>
  );
}

export default Sidebar;
