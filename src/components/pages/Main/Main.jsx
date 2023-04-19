// core
import React from "react";

// components
import { Layout, ListItems } from "../../common";

// assets
import soup from "../../../assets/images/soup.jpg";

const items1 = [
  {
    id: 0,
    name: "Acai bowls",
    items: [
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_5",
      },
      {
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_6",
      },
      {
        image: soup,
        title: "Item name in two lines increases height",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_7",
      },
    ],
  },
  {
    id: 1,
    name: "Acai bowls",
    items: [
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_7",
      },
      {
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_8",
      },
      {
        image: soup,
        title: "Item name in two lines increases height",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_9",
      },
    ],
  },
  {
    id: 2,
    name: "Acai bowls",
    items: [
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_10",
      },
      {
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_11",
      },
      {
        image: soup,
        title: "Item name in two lines increases height",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_12",
      },
    ],
  },
];

const items2 = [
  {
    id: 1,
    name: "Acai bowls",
    items: [
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_13",
      },
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_14",
      },
      {
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_15",
      },
      {
        image: soup,
        title: "Item name in two lines increases height",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_16",
      },
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_17",
      },
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_18",
      },
      {
        image: soup,
        title: "Sunrise Acai Bowl",
        price: 299,
        link: "#",
        id: "sunrise_acai_bowl_19",
      },
    ],
  },
];

export const Main = () => {
  return (
    <Layout>
      <main className="home">
        <section>
          <ListItems items={items1} toggle />
          <ListItems items={items2} toggle />
        </section>
      </main>
    </Layout>
  );
};
