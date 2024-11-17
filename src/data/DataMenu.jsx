const dataMenu = [
  {
    id: 1,
    nameOfCategory: "Hot Drinks",
    imageOfCategory: "hot-drinks.png",
    menuItems: [
      {
        id: 101,
        name: "Espresso",
        description: "Strong and bold coffee.",
        image: "espresso.png",
        sale: false,
        tags: ["coffee", "hot", "strong"],
        price: 3,
      },
      {
        id: 102,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam.",
        image: "cappuccino.png",
        sale: true,
        tags: ["coffee", "hot", "milky"],
        price: 4,
      },
    ],
  },
  {
    id: 2,
    nameOfCategory: "Cold Drinks",
    imageOfCategory: "cold-drinks.png",
    menuItems: [
      {
        id: 201,
        name: "Iced Latte",
        description: "Espresso with cold milk and ice.",
        image: "iced-latte.png",
        sale: false,
        tags: ["coffee", "cold", "refreshing"],
        price: 4.5,
      },
      {
        id: 202,
        name: "Cold Brew",
        description: "Coffee brewed cold and served chilled.",
        image: "cold-brew.png",
        sale: true,
        tags: ["coffee", "cold", "smooth"],
        price: 4.25,
      },
    ],
  },
  {
    id: 3,
    nameOfCategory: "Snacks",
    imageOfCategory: "snacks.png",
    menuItems: [
      {
        id: 301,
        name: "Bagels",
        description: "Toasted bagels with cream cheese.",
        image: "bagels.png",
        sale: false,
        tags: ["baked", "breakfast", "snack"],
        price: 3.50,
      },
      {
        id: 302,
        name: "Muffins",
        description: "Freshly baked muffins with a variety of flavors.",
        image: "muffins.png",
        sale: false,
        tags: ["baked", "sweet", "snack"],
        price: 2.75,
      },
    ],
  },
];

export default dataMenu;
