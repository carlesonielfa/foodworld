import React from "react";
import { Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FoodButton from "./FoodButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    paddingLeft: "40px",
  },
}));

export default function Cistella() {
  const classes = useStyles();
  return (
    <div align="center">
      <Typography className={classes.root} align="left" variant="h2">
        La teva cistella
      </Typography>
      <FoodButton
        component={Link}
        to="/fhc6/checkout"
        text="Realitzar Comanda"
      />
    </div>
  );
}
