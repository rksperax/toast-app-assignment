import React, { useEffect, useState } from "react";

// library
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import {
  CookingInstruction,
  ListItems,
  NoNavigationLayout,
  PrimaryButton,
} from "../../common";
import { routes } from "../../App/routes";
import { setOrder } from "../../../redux/app/actions";

// assets
import styles from "./PlaceOrder.module.scss";
import saly6 from "../../../assets/images/saly-6.png";
import { ReactComponent as BackSvg } from "../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as WarningSvg } from "../../../assets/images/icons/warning.svg";
import { getOrders } from "../../../redux/app/selectors";
import chocolate from "../../../assets/images/chocolate.png";
import sunset from "../../../assets/images/sunset.png";

export const PlaceOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  const previousOrders = [
    {
      image: chocolate,
      title: "Sunrise Acai Bowl",
      price: 299,
      link: "#",
      id: "sunrice_acai_bowl_2",
      orderCount: 2,
    },
    {
      image: chocolate,
      title: "Sunrise Acai Bowl",
      price: 299,
      link: "#",
      id: "sunrice_acai_bowl_3",
      orderCount: 1,
    },
    {
      image: sunset,
      title: " Sunset Acai Bowl",
      price: 299,
      link: "#",
      id: "sunrice_acai_bowl_4",
      orderCount: 3,
    },
  ];

  const previousItems = [
    {
      id: 0,
      name: "Previous orders",
      items: previousOrders,
    },
  ];
  useEffect(() => {
    setItems([{ id: 0, name: "Current order", items: orders }]);
  }, [orders]);
  const navigate = useNavigate();

  const onPlaceOrder = () => {
    navigate("/special");
    dispatch(setOrder(previousOrders));
  };

  return (
    <NoNavigationLayout>
      <CookingInstruction show={show} setShow={setShow} />
      <main className={styles.placeOrder}>
        <div className={styles.panel}>
          <Link to={routes.main} className={styles.icon}>
            <BackSvg />
          </Link>
          <h2>
            Place Order
            {items && (
              <div className={styles.icon}>
                <WarningSvg />
              </div>
            )}
          </h2>
        </div>
        {items ? (
          <section className={styles.products}>
            <ListItems
              items={items}
              toggle
              list
              instruction
              setShow={setShow}
            />
            <ListItems items={previousItems} toggle list isAddButton={false} />
            <PrimaryButton
              title="PLACE ORDER"
              info={`${orders.length} Items`}
              white
              onClick={onPlaceOrder}
            />
          </section>
        ) : (
          <section className={styles.content}>
            <h3>No orders yet!</h3>
            <p>Add something from the menu.</p>
            <Link
              to={routes.main}
              type="button"
              className={`btn btn-primary ${styles.btn}`}
            >
              START ORDERING
            </Link>
            <img className={styles.banner} src={saly6} alt="" />
          </section>
        )}
      </main>
    </NoNavigationLayout>
  );
};
