import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import MenuItem from "./MenuItem";
import drinks from "./assets/drinks.jpg";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const menu = useSelector((state) => {
      return state.items.begudes;
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {menu.map((item) => 
      (
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
    paddingBottom: "80px",
  },
  media: {
    height: 100,
    objectFit: "cover",
    width: "100%",
    filter: "brightness(55%);",
  },
  imageContainer: {
    position: "relative",
    textAlign: "center",
    color: theme.palette.common.white,
  },
  imageContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  title: {
    position: "relative",
    top: "-85px",
    marginBottom: "-50px",
  },
}));

export default function Begudes() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img className={classes.media} src={drinks} alt="" />
        <div className={classes.imageContent}>
          <Typography className={classes.title} color="inherit" variant="h2">
            BEGUDES
          </Typography>
        </div>
      </div>
      <TabPanel/>
    </div>
  );
}
