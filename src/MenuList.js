import pizza from "./assets/italian.jpg";
import margarita from "./assets/margarita.png";
import carbonara from "./assets/carbonara.png";

const menu = {
  pizza: [
    {
      id: 10,
      image: margarita,
      title: "Margherita",
      description: "Pizza bàsica de mozarella sobre una base de tomàquet",
      price: 9,
    },
    {
      id: 11,
      image: carbonara,
      title: "Carbonara",
      description: "Deliciosa pizza amb ceba, pernil i bacó",
      price: 11,
    },
    {
      id: 12,
      image: carbonara,
      title: "Prosciutto",
      description: "Clàssica pizza de pernil i formatge amb base de tomàquet",
      price: 11,
    },
    {
      id: 13,
      image: carbonara,
      title: "Barbecue",
      description: "Pizza pels amans de la carn, amb ceba i blat de moro",
      price: 11,
    },
  ],
  pasta: [
    {
      id: 20,
      image: pizza,
      title: "Spaghetti Bolognese",
      description: "MEATBALL",
      price: 13,
    },
    {
      id: 21,
      image: pizza,
      title: "Tagliatelle Carbonara",
      description:
        "Tallarins amb salsa carbonara (ous, bacó i formatge parmesà)",
      price: 13,
    },
    {
      id: 22,
      image: pizza,
      title: "Rigatoni al Pesto",
      description:
        "Macarrons grans amb salsa de pesto (oli, pinyols i alfàbrega)",
      price: 13,
    },
    {
      id: 23,
      image: pizza,
      title: "Penne 4 Formaggi",
      description:
        "Macarrons amb salsa de quatre formatges: mozarella, gorgonzola, parmesà i robiola",
      price: 13,
    },
  ],
  antipasti: [
    {
      id: 30,
      image: pizza,
      title: "Insalata Capresse",
      description: "Fresca amanida de tomàquet i mozzarella",
      price: 9,
    },
    {
      id: 31,
      image: pizza,
      title: "Lasagna Campagnola",
      description: "Lasanya de carn, mozarella i salsa de tomàquet",
      price: 13,
    },
    {
      id: 32,
      image: pizza,
      title: "Parmigiana",
      description: "Laminat d'albergínia amb salsa de tomàquet i alfàbrega",
      price: 12,
    },
    {
      id: 33,
      image: pizza,
      title: "Carpaccio di tonno",
      description: "Tonyina crua tallada en fines làmines",
      price: 14,
    },
  ],
};

export default menu;
