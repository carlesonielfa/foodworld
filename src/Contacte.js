import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import PlaceIcon from "@material-ui/icons/Place";
import { Grid } from "@material-ui/core";
import map from "./assets/map.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  title: {
    paddingBottom: "20px",
  },
  contactBox: {
    paddingLeft: "20px",
  },
  responsive: {
    paddingTop: "30px",
    width: "100%",
    height: "auto",
  },
}));

const items = [
  {
    icon: PhoneIcon,
    text: "930001122",
  },
  {
    icon: MailIcon,
    text: "info@foodworld.com",
  },
  {
    icon: PlaceIcon,
    text: "Gran Via 545,\nBarcelona",
  },
];

export default function Contacte() {
  const classes = useStyles();

  return (
    <div>
      <div align="center" className={classes.title}>
        <Typography className={classes.root} align="left" variant="h2">
          Contacte
        </Typography>
      </div>

      {items.map((item) => (
        <div align="left" className={classes.contactBox}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <item.icon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography className={classes.root} variant="h3">
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        </div>
      ))}

      <div align="center">
        <img src={map} class={classes.responsive} alt=""></img>
      </div>
    </div>
  );
}
