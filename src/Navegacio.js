import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Link } from "react-router-dom";

import {
  ShoppingCart,
  HomeRounded,
  RestaurantMenuRounded,
} from "@material-ui/icons/";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";

const buttonCartaStyles = makeStyles((theme) => ({
  //style pel boto carta
  // NOTA: per fer-lo rodó s'ha de fer:
  // borderRadius = 2*width = 2*height =
  root: {
    color: theme.palette.primary.main,
    "&$selected": {
      backgroundColor: theme.palette.accent.light,
      color: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.accent.main,
    borderRadius: "100%",
    top: "-40px",
    maxWidth: "0",
    height: "143%",
  },
  selected: {},
}));

const buttonStyles = makeStyles((theme) => ({
  //style pels altres botons
  root: {
    color: theme.palette.secondary.light,
    "&$selected": {
      color: theme.palette.background.default,
    },
  },
  selected: {},
}));

const bottomNavStyles = makeStyles((theme) => ({
  //style per la navigation
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  }
}));

export default function Navegacio() {
  const cartQuantity = useSelector((state)=>{
    return state.totalItems;
  });
  const cartaClasses = buttonCartaStyles();
  const buttonClasses = buttonStyles();
  const navClasses = bottomNavStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={navClasses.root}
    >
      <BottomNavigationAction
        classes={buttonClasses}
        icon={<HomeRounded style={{ fontSize: 26 }} />}
        component={Link}
        to="/fhc6/"
      />
      <BottomNavigationAction
        classes={cartaClasses}
        label="Carta"
        icon={<RestaurantMenuRounded style={{ fontSize: 26 }} />}
        component={Link}
        to="/fhc6/carta"
      />
      <BottomNavigationAction
        classes={buttonClasses}
        icon={
          <Badge badgeContent={cartQuantity } color="error" style= {{fontFamily:'"Montserrat", "Inter", sans-serif'}} >
            <ShoppingCart  style={{ fontSize: 26 }}/>
          </Badge>
        }
        component={Link}
        to="/fhc6/cistella"
      />
    </BottomNavigation>
  );
}
