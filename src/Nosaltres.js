import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    paddingLeft: "40px",
  },
}));

export default function Nosaltres() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <Typography className={classes.root} align="left" variant="h2">
          Nosaltres
        </Typography>
      </div>
    </div>
  );
}
