// core
import React from "react";

// components
import { GridItems, Layout } from "../../common";

// assets
import styles from "./Special.module.scss";
import chocolate from "../../../assets/images/chocolate.png";
import sunset from "../../../assets/images/sunset.png";
import banner from "../../../assets/images/special-banner.png";

const items1 = [
  {
    id: 0,
    name: "Today’s Special",
    items: [
      {
        image: sunset,
        title: "Chocolate Bowl",
        price: 299,
        link: "#",
        id: "chocolate_bowl_1",
      },
      {
        image: chocolate,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrice_acai_bowl_2",
      },
      {
        image: chocolate,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrice_acai_bowl_3",
      },
      {
        image: sunset,
        title: " Sunset Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrice_acai_bowl_4",
      },
    ],
  },
];

export const Special = () => {
  return (
    <Layout>
      <main className="special">
        <section>
          <div className={styles.banner}>
            <div className={styles.image}>
              <img src={banner} alt="banner" />
              <h3>
                Welcome to <br /> Sacred Earth Cafe
              </h3>
            </div>
          </div>
        </section>
        <section>
          <GridItems items={items1} toggle />
        </section>
      </main>
    </Layout>
  );
};
