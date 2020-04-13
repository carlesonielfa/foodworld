import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import QuantitySelect from "./QuantitySelect";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    align: "center",
    padding: "20px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "left",
    verticalAlign: "middle",
    paddingRight: "15px",
  },
  image: {
    width: "110px",
  },
  infoContainer: {
    width: "100%",
    //backgroundColor: "grey"
  },
  description: {
    textAlign: "justify",
  },
}));

export default function MenuItem(props) {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={props.image}
          alt={props.title}
        ></img>
      </div>
      <div className={classes.infoContainer}>
        <Typography variant="h3" align="left">
          {props.title}
        </Typography>
        <Typography className={classes.description}>
          {props.description}
        </Typography>
        <QuantitySelect price={props.price} />
      </div>
    </div>
  );
}
