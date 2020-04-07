import React from "react";
import {Typography, Button} from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FoodButton from "./FoodButton";

const useStyles = makeStyles((theme) => ({
  buttonCheckout: {
    backgroundColor: theme.palette.accent.main,
    align: "center",
    textTransform: "none",
    fontSize: 16
  },
}));

export default function Cistella() {
  const classes = useStyles();
  return (
    <div align="center">
      <Typography align="center" variant="h5">
        Cistella
      </Typography>
      <FoodButton component={Link} to="/fhc6/checkout" text="Realitzar Comanda "/>
    </div>
  );
}
