import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../redux/modals/actions";
import { getOrders } from "../../../redux/modals/selectors";

// styles
import styles from "./AddButton.module.scss";

export const AddButton = ({ product }) => {
  const orders = useSelector(getOrders);

  const dispatch = useDispatch();

  const addButton = () => {
    dispatch(orderActions.setOrder([...orders, { ...product, orderCount: 1 }]));
  };

  const count = useMemo(() => {
    const found = orders.find((order) => order.id === product.id);

    if (found) {
      return found.orderCount;
    }
    return 0;
  }, [orders]);

  const changeCount = (symbol) => {
    const _index = orders.map((order) => order.id).indexOf(product.id);

    let _orders = [...orders];

    if (symbol === "-") {
      if (_orders[_index].orderCount === 1) {
        _orders = _orders.filter((order) => order.id !== product.id);
      } else {
        _orders[_index] = {
          ..._orders[_index],
          orderCount: _orders[_index].orderCount - 1,
        };
      }
      dispatch(orderActions.setOrder(_orders));
    } else {
      _orders[_index] = {
        ..._orders[_index],
        orderCount: _orders[_index].orderCount
          ? _orders[_index].orderCount + 1
          : 1,
      };
      dispatch(orderActions.setOrder(_orders));
    }
  };

  return !count ? (
    <button className={styles.add} type="button" onClick={() => addButton()}>
      <span>+</span>
      ADD
    </button>
  ) : (
    <button className={`${styles.add} ${styles.mod}`} type="button">
      <span className={styles.minus} onClick={() => changeCount("-")}>
        -
      </span>
      {count}
      <span className={styles.plus} onClick={() => changeCount("+")}>
        +
      </span>
    </button>
  );
};
