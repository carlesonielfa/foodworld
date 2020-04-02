import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Link } from "react-router-dom";

import {
  ShoppingCart,
  HomeRounded,
  RestaurantMenuRounded
} from "@material-ui/icons/";

const buttonCartaStyles = makeStyles(theme => ({
  //style pel boto carta
  // NOTA: per fer-lo rodó s'ha de fer:
  // borderRadius = 2*width = 2*height =
  root: {
    color: theme.palette.primary.main,
    "&$selected": {
      backgroundColor: theme.palette.distinctive.light,
      color: theme.palette.primary.main
    },
    backgroundColor: theme.palette.distinctive.main,
    borderRadius: "50%",
    top: "-35px",
    maxWidth: "0",
    height: "130%"
  },
  selected: {}
}));

const buttonStyles = makeStyles(theme => ({
  //style pels altres botons
  root: {
    color: theme.palette.secondary.light,
    "&$selected": {
      color: theme.palette.background.default
    }
  },
  selected: {}
}));

const bottomNavStyles = makeStyles(theme => ({
  //style per la navigation
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.main
  }
}));

export default function Navegacio() {
  const cartaClasses = buttonCartaStyles();
  const buttonClasses = buttonStyles();
  const navClasses = bottomNavStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={navClasses.root}
    >
      <BottomNavigationAction
        classes={buttonClasses}
        icon={<HomeRounded />}
        component={Link}
        to="/fhc6/"
      />
      <BottomNavigationAction
        classes={cartaClasses}
        label="Carta"
        icon={<RestaurantMenuRounded />}
        component={Link}
        to="/fhc6/carta"
      />
      <BottomNavigationAction
        classes={buttonClasses}
        icon={<ShoppingCart />}
        component={Link}
        to="/fhc6/cistella"
      />
    </BottomNavigation>
  );
}
