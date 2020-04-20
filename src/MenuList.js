import margarita from "./assets/margarita.png";
import carbonara from "./assets/carbonara.png";
import carbonarap from "./assets/carbonarap.png";
import quatrof from "./assets/4quesos.png";
import bbq from "./assets/bbq.png";
import bolognese from "./assets/bolognese.png";
import formaggi from "./assets/formaggi.png";
import pesto from "./assets/pesto.png";
import lasagna from "./assets/lasagna.png";
import carpaccio from "./assets/carpaccio.png";
import caprese from "./assets/caprese.png";
import parmiggiana from "./assets/parmigiana.png";
import pepsi from "./assets/pepsi.png";
import aigua from "./assets/aigua.png";
import redbull from "./assets/redbull.png";
const menu = {
  italia:{
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
        image: quatrof,
        title: "4 Formaggio",
        description: "Clàssica pizza de quatre formatges: mozarella, gorgonzola, parmesà i robiola",
        price: 11,
      },
      {
        id: 13,
        image: bbq,
        title: "Barbecue",
        description: "Pizza pels amants de la carn, amb ceba i blat de moro",
        price: 11,
      },
    ],
    pasta: [
      {
        id: 20,
        image: bolognese,
        title: "Tagliatelle Bolognese",
        description: "Tallarins amb salsa de tomàquet i carn",
        price: 12,
      },
      {
        id: 21,
        image: carbonarap,
        title: "Tagliatelle Carbonara",
        description:
          "Tallarins amb salsa carbonara (ous, bacó i formatge parmesà)",
        price: 13,
      },
      {
        id: 22,
        image: pesto,
        title: "Spaghetti al Pesto",
        description:
          "Espaguetis  amb salsa de pesto (oli, pinyols i alfàbrega)",
        price: 13,
      },
      {
        id: 23,
        image: formaggi,
        title: "Penne 4 Formaggi",
        description:
          "Macarrons amb salsa de quatre formatges: mozarella, gorgonzola, parmesà i robiola",
        price: 14,
      },
    ],
    antipasti: [
      {
        id: 30,
        image: caprese,
        title: "Insalata Capresse",
        description: "Fresca amanida de tomàquet i mozzarella",
        price: 9,
      },
      {
        id: 31,
        image: lasagna,
        title: "Lasagna Campagnola",
        description: "Lasanya de carn, mozarella i salsa de tomàquet",
        price: 13,
      },
      {
        id: 32,
        image: parmiggiana,
        title: "Parmigiana",
        description: "Laminat d'albergínia amb salsa de tomàquet i alfàbrega",
        price: 12,
      },
      {
        id: 33,
        image: carpaccio,
        title: "Carpaccio di tonno",
        description: "Tonyina crua tallada en fines làmines",
        price: 14,
      },
    ],
  },
  begudes:[
    {
      id: 34,
      image: aigua,
      title: "Aigua",
      description: "Ampolla de 50cl",
      price: 1
    },
    {
      id: 35,
      image: pepsi,
      title: "Pepsi",
      description: "Llauna de 33cl",
      price: 1.75
    },
    {
      id: 36,
      image: redbull,
      title: "Red Bull",
      description: "Llauna de 25cl",
      price: 2
    },
    ]
};

export default menu;
