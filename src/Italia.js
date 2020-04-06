import React from "react";
import { makeStyles, Tabs, Tab } from "@material-ui/core";

import italian from "./assets/italian.jpg";
import margarita from "./assets/margarita.png";
import carbonara from "./assets/carbonara.png";
import MenuItem from "./MenuItem";
import { menu } from "./MenuList";

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
      <img src={italian} width="100%" height="100px" alt="" />

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
