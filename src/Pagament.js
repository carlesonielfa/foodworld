import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import CustomStepper from "./CustomStepper";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    paddingLeft: "20px",
  },
}));

export default function Checkout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="left" variant="h2">
        La teva comanda
      </Typography>
      <CustomStepper />
    </div>
  );
}
