import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: "green"
  },
  price: {
    paddingRight: "15px"
  },
  iconButton: {
    color: "white",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5
  }
}));

export default function QuantitySelect(props) {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.price}
        variant="subtitle1"
        color="secondary"
      >
        {props.price}
      </Typography>
      <IconButton className={classes.iconButton} aria-label="add">
        <AddCircleOutlineIcon />
      </IconButton>
      <Typography variant="h3"> 2 </Typography>
      <IconButton className={classes.iconButton} aria-label="remove">
        <RemoveCircleOutlineIcon />
      </IconButton>
    </div>
  );
}
