import React from "react";
import { Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FoodButton from "./FoodButton";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    paddingBottom: "110px",
  },
  root: {
    padding: "20px",
    paddingLeft: "40px",
  },
}));

export default function Cistella() {
  const classes = useStyles();
  const total = useSelector((state) => {
    return state.total;
  });
  const items = useSelector((state) => {
    return state.addedItems;
  });
  return (
    <div align="center" className={classes.mainDiv}>
      <Typography className={classes.root} align="left" variant="h2">
        La teva cistella
      </Typography>
      {items.map((item) => (
        <MenuItem
          image={item.image}
          title={item.title}
          description={<br/>}
          price={item.price}
          id={item.id}
        />
      ))}
      <Typography className={classes.root} align="right" variant="h3">
        Total: {total.toFixed(2)} €
      </Typography>
      <FoodButton
        component={Link}
        to="/fhc6/checkout"
        text="Realitzar Comanda"
      />
    </div>
  );
}
