// core
import React, { useState } from "react";

// library
import { Link } from "react-router-dom";

// components
import { routes } from "../../App/routes";

// assets
import styles from "./Footer.module.scss";
import { ReactComponent as LightningSvg } from "../../../assets/images/icons/lightning.svg";
import { ReactComponent as BookSvg } from "../../../assets/images/icons/book-open.svg";
import { ReactComponent as ShoppingSvg } from "../../../assets/images/icons/shopping-bag.svg";
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";
import { useSelector } from "react-redux";
import { getOrders } from "../../../redux/app/selectors";

export const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const orders = useSelector(getOrders);
  return (
    <>
      <div className={`${styles.menu} ${showMenu ? styles.open : ""}`}>
        <div className={styles.inner}>
          <h3>
            Menu
            <span className={styles.close} onClick={() => setShowMenu(false)}>
              <CloseSvg />
            </span>
          </h3>
          <hr />
          <ul className={styles.availability}>
            <li>
              Veg Only
              <label className={styles.radio}>
                <input type="checkbox" hidden defaultChecked />
                <span />
              </label>
            </li>
            <li>
              Contains Egg
              <label className={styles.radio}>
                <input type="checkbox" hidden />
                <span />
              </label>
            </li>
          </ul>
          <hr />
          <ul className={styles.availability}>
            <li>
              All <span>56</span>
            </li>
            <li>
              Starters <span>56</span>
            </li>
            <li>
              Breakfast <span>56</span>
            </li>
            <li>
              Lunch <span>56</span>
            </li>
            <li>
              Dinner <span>56</span>
            </li>
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <div
          className={`${styles.menuBtn} btn`}
          onClick={() => setShowMenu(true)}
        >
          Menu
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to="#">
              <LightningSvg />
            </Link>
          </li>
          <li className={styles.active}>
            <Link to="#">
              <BookSvg />
            </Link>
          </li>
          <li className={styles.notEmpty}>
            {orders && orders.length > 0 ? (
              <span className={styles.count}>{orders.length}</span>
            ) : null}
            <Link to={routes.placeOrder}>
              <ShoppingSvg />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
