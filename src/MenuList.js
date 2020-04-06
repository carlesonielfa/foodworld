import pizza from "./assets/italian.jpg";
import margarita from "./assets/margarita.png";
import carbonara from "./assets/carbonara.png";

export const address = "./assets/italian.jpg";

export const menu = {
  pizzas: [
    {
      image: margarita,
      title: "Margarita",
      description: "Bàsica",
      price: "9,50€"
    },
    {
      image: carbonara,
      title: "Carbonara",
      description: "Deliciosa pizza amb ceba, pernil i bacó",
      price: "9,50€"
    }
  ],
  pastas: [
    {
      image: pizza,
      title: "Bolognesa",
      description: "MEATBALL",
      price: "99,99€"
    }
  ]
};
