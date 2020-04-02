import React from "react";
import Typography from "@material-ui/core/Typography";

import pizza from "./assets/pizza.png";
import MenuItem from "./MenuItem";
import { ListItemIcon } from "@material-ui/core";


const items = [
  {
  image: pizza,
  title: "Carbonara",
  description: "Deliciosa pizza amb pernil, ceba i bacon",
  prize: "9,50E"
  },
]


export default function Italia() {
  return (
    <div>
        <Typography variant="h2">
            Italià
        </Typography>

        {items.map(item =>(
          <MenuItem image = {item.image} title = {item.title} description = {item.description} prize = {item.prize}/>
        ))}
    </div>
  );
}
