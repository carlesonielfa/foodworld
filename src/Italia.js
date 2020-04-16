import React from "react";
import { makeStyles, Tabs, Tab, Typography } from "@material-ui/core";

import MenuItem from "./MenuItem";
import italian from "./assets/italian.jpg";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const menu = useSelector((state)=>{    

    return (value===1) ? state.items.pastas : state.items.pizzas
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {menu.map((item) => (
        <MenuItem
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
}

const styles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    width: "100%",
  },
  tabs: {
    variant: "fullWidth",
    //backgroundColor: "#f9fbe7"
  },
  tab: {
    paddingRight: "30px",
    paddingLeft: "30px",
  },
  media: {
    height: 100,
    objectFit: "cover",
    width: "100%",
    filter: "brightness(55%);"
  },
  imageContainer:{
    position:"relative",
    textAlign: "center",
    color: theme.palette.common.white
  },
  imageContent:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  title:{
    position: "relative",
    top: "-85px",
    marginBottom: "-70px"
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
      <div className={classes.imageContainer}>
        <img className={classes.media} src={italian}/>
        <div className={classes.imageContent}>
          <Typography className={classes.title} color="inherit" variant="h2">ITALIÀ</Typography>
        </div>
      </div>
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