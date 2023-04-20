// core
import React from "react";

// library
import { NavLink, useLocation } from "react-router-dom";

// components
import { routes } from "../../App/routes";

// assets
import styles from "./Header.module.scss";
import { ReactComponent as HashTag } from "../../../assets/images/icons/hash-tag.svg";
import { ReactComponent as Share } from "../../../assets/images/icons/share.svg";
import { ReactComponent as AppLogo } from "../../../assets/images/icons/logo.svg";

const links = [
  { name: "Special", url: routes.special },
  { name: "Main", url: routes.main },
  { name: "Beverages", url: routes.beverages },
  { name: "Desserts", url: routes.desserts },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logoWrapper}>
          <AppLogo />
          <h3>Sacred Earth Cafe</h3>
        </div>

        <ul>
          <li>
            <Share />
          </li>
          <li>
            <HashTag />
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                key={link.name}
                to={link.url}
                className={
                  link.url === location.pathname ? styles.activeTab : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
