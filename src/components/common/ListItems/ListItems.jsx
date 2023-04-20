import React, { useState } from "react";

//library

import { Link } from "react-router-dom";

// components
import { AddButton } from "../AddButton/AddButton";
import { VeganStatus } from "../VeganStatus/VeganStatus";

// assets
import styles from "./ListItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";
import edit from "../../../assets/images/icons/edit.svg";
import minus from "../../../assets/images/icons/minus-circle.svg";

export const ListItems = ({
  items,
  mod,
  toggle,
  list,
  instruction,
  setShow,
  isAddButton = true,
}) => {
  const [instructionAdded, setInstructionAdded] = useState(false);
  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };

  return items.map((item) => (
    <div key={item.id} className={`${styles.items} ${mod ? styles.mod : ""}`}>
      {toggle ? (
        <h4
          className={`${styles.title} ${styles.toggle}`}
          onClick={(e) => showItems(e)}
        >
          {item.name}
          <hr />
          <ArrowSvg />
        </h4>
      ) : (
        <h4 className={styles.title}>{item.name}</h4>
      )}
      {!list ? (
        <div className={styles.panel}>
          {item.items.map((product, index) => (
            <Link
              key={index}
              id={product.title}
              to={product.link}
              className={styles.item}
            >
              {product.image && <img src={product.image} alt={product.title} />}
              <div className={styles.description}>
                <h3>{product.title}</h3>
                <div className={styles.info}>
                  <div className={styles.price}>
                    <VeganStatus />
                    <h4>₹{product.price}</h4>
                  </div>
                  {isAddButton ? (
                    <AddButton product={product} />
                  ) : (
                    <div className={styles.orderCount}>
                      {product.orderCount}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={`${styles.panel} ${styles.mod}`}>
          {item.items.map((product, index) => (
            <div key={index} id={product.title} className={styles.item}>
              <div className={styles.description}>
                <div className={styles.list}>
                  <VeganStatus />
                  <div>
                    <h4>{product.title}</h4>
                    <div className={styles.info}>
                      <div className={styles.price}>
                        <h5>₹{product.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {isAddButton ? (
                  <AddButton product={product} />
                ) : (
                  <div className={styles.orderCount}>{product.orderCount}</div>
                )}
              </div>
            </div>
          ))}
          <div>
            {instructionAdded ? (
              <div className={styles.instruction}>
                <div>
                  <h5>Cooking instruction:</h5>
                  <p>
                    Sunrise: dklfnvslvn <br />
                    Chocolate: jadfasbd
                  </p>
                </div>
                <div className={styles.action}>
                  <img src={edit} alt="edit" />
                  <img src={minus} alt="minus" />
                </div>
              </div>
            ) : (
              instruction && (
                <div className={styles.link} onClick={() => setShow(true)}>
                  Add cooking instruction
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  ));
};
