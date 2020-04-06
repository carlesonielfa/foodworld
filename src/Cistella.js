import React from "react";
import Typography from "@material-ui/core/Typography";

import { address } from "./MenuList"

export default function Cistella() {
  var direccion = "./assets/italian.jpg";
  return (
    <div>
      <img src={require("./assets/italian.jpg")}></img>
      <img src={require(direccion)}></img>
      <Typography align="center" variant="h5">
        Cistella
      </Typography>
    </div>
  );
}
