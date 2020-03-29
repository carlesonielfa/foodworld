import React from "react";
import Typography from "@material-ui/core/Typography";

import pizza from "./assets/pizza.png";

export default function Italia() {
  return (
    <div>
        <Typography align="center" variant="h5">
            Italia
        </Typography>

        <img src={pizza}>

        </img>
    </div>
  );
}
