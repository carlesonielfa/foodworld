import React from "react";
import { makeStyles, Typography, IconButton } from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "green"
  },
  price: {
    paddingRight: "15px",
  },
  iconButton: {
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
}));

export default function QuantitySelect(props) {
  const classes = styles();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    let q = state.addedItems.find((item) => item.id === props.id);
    return q ? q.quantity : 0;
  });
  const handleAddClick = (id_item) => {
    dispatch({ type: "ADD_TO_CART", id: id_item });
  };
  const handleRemoveClick = (id_item) => {
    dispatch({ type: "REMOVE_FROM_CART", id: id_item });
  };
  return (
    <div className={classes.root}>
      <Typography
        className={classes.price}
        variant="subtitle1"
        color="secondary"
      >
        {props.price.toFixed(2)}€
      </Typography>
      <IconButton
        className={classes.iconButton}
        aria-label="add"
        onClick={() => {
          handleAddClick(props.id);
        }}
      >
        <AddCircleOutlineIcon />
      </IconButton>
      <Typography variant="h3"> {quantity} </Typography>
      <IconButton
        className={classes.iconButton}
        aria-label="remove"
        onClick={() => {
          handleRemoveClick(props.id);
        }}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
    </div>
  );
}
