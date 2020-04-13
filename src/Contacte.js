import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import PlaceIcon from "@material-ui/icons/Place";
import RoomIcon from "@material-ui/icons/Room";
import { Grid } from "@material-ui/core";

import GoogleMap from "google-map-react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  title: {
    paddingBottom: "20px",
  },
  contactBox: {
    paddingLeft: "40px",
  },
}));

const Marker = ({ title }) => (
  <div>
    <RoomIcon />
    <Typography display="inline" align="center" noWrap>
      {title}
    </Typography>
  </div>
);

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
    text: "Av. Diagonal 45,\nBarcelona",
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

      <div style={{ width: "100%", height: "70%", align: "center" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyCW-ZfgFahCgZlHqbFfpUq8yuGCqFF_T5Y" }}
          center={{ lat: 41.3876167, lng: 2.1617593 }}
          zoom={15}
        >
          <Marker
            title={"Direcció d'entrega"}
            lat={41.3866167}
            lng={2.1607593}
          />
        </GoogleMap>
      </div>
    </div>
  );
}
