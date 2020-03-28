import React, { Component } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {ShoppingCart, HomeRounded, RestaurantMenuRounded} from '@material-ui/icons/'
import {Link} from "react-router-dom"

const buttonCartaStyles = makeStyles(theme => ({
  //style pel boto carta
  root: {
    color: theme.palette.secondary.main,
    "&$selected": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.primary.main,
    borderRadius:"50%",
    top: "-35px",
    maxWidth: "0",
    height: "130%"

  },
  selected:{}
}))
const buttonStyles = makeStyles(theme => ({
  //style pels altres botons
  root: {
    color: theme.palette.secondary.light,
    "&$selected": {
      color: "white",
    },
  },
  selected:{}
}))
const bottomNavStyles = makeStyles(theme => ({
  //style per la navigation
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.secondary.main
  },

}))
export default function Navegacio() {
  const cartaClasses = buttonCartaStyles();
  const buttonClasses = buttonStyles();
  const navClasses = bottomNavStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {setValue(newValue);}}
        showLabels
        className={navClasses.root}
    >
        <BottomNavigationAction classes = {buttonClasses} icon ={<HomeRounded/>} component={Link} to="/"/>
        <BottomNavigationAction classes={cartaClasses} label = "Carta" icon ={<RestaurantMenuRounded /> } component={Link} to="/carta"/>
        <BottomNavigationAction classes = {buttonClasses} icon ={<ShoppingCart/>} component={Link} to="/cistella"/>
    </BottomNavigation>
  );
}
