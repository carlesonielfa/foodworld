import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {ShoppingCart, HomeRounded, RestaurantMenuRounded, CenterFocusWeakRounded} from '@material-ui/icons/'

const useStyles = makeStyles({

});

export default function Navegacio() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        color ='secondary'
    >
        <BottomNavigationAction icon ={<HomeRounded/>}/>
        <BottomNavigationAction icon ={<RestaurantMenuRounded fontSize = "large"/> }/>
        <BottomNavigationAction icon ={<ShoppingCart/>}/>
    </BottomNavigation>
  );
}