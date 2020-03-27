import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { ShoppingCart, HomeRounded, RestaurantMenuRounded } from '@material-ui/icons/'

const buttonCartaStyles = makeStyles(theme => ({
	//style pel boto carta
	// NOTA: per fer-lo rodó s'ha de fer:
	// borderRadius = 2*width = 2*height = 
	root: {
		color: theme.palette.secondary.main,
		"&$selected": {
			backgroundColor: theme.palette.primary.light,
			color: theme.palette.secondary.main,
		},
		backgroundColor: theme.palette.primary.main,
		borderRadius: "50%",
		top: "-35px",
		maxWidth: "0",
		height: "130%"
	},
	selected: {}
}))

const buttonStyles = makeStyles(theme => ({
	//style pels altres botons
	root: {
		color: theme.palette.secondary.light,
		"&$selected": {
			color: "white",
		},
	},
	selected: {}
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
			onChange={(event, newValue) => { setValue(newValue); }}
			showLabels
			className={navClasses.root}
		>
			<BottomNavigationAction classes={buttonClasses} icon={<HomeRounded />} />
			<BottomNavigationAction classes={cartaClasses} label="Carta" icon={<RestaurantMenuRounded />} />
			<BottomNavigationAction classes={buttonClasses} icon={<ShoppingCart />} />
		</BottomNavigation>
	);
}
