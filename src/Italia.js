import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Tabs, Tab, Box } from "@material-ui/core";

import pizza from "./assets/pizza.png";
import MenuItem from "./MenuItem";

const menu = {
  pizzas: [
    {
      image: pizza,
      title: "Margarita",
      description: "Bàsica",
      price: "9,50€"
    },
    {
      image: pizza,
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  var items = menu.pizzas;

  if (value === 1) {
    items = menu.pastas;
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {items.map(item => (
        <MenuItem
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

const styles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    widt: "100%",
    padding: 5
  },
  tabs: {
    variant: "fullWidth"
    //backgroundColor: "#f9fbe7"
  },
  tab: {
    paddingRight: "30px",
    paddingLeft: "30px"
  }
}));

export default function Italia() {
  const classes = styles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <img src={pizza} width="100%" height="100px" />

      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        centered
      >
        <Tab label="Pizzas" className={classes.tab} />
        <Tab label="Pasta" className={classes.tab} />
        <Tab label="Antispasti" className={classes.tab} />
      </Tabs>

      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
    </div>
  );
}
