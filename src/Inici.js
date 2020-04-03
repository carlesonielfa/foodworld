import React from 'react';
import sharing from "./assets/sharing.jpg";
import { makeStyles, Typography, IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const mainMenu = makeStyles(theme => ({
    responsive: {
        width: "100%",
        height: "auto",
        marginTop: "15px",
    },
    greeting:{
        paddingTop: "10%",
        width: "80%",
        float: "left"
    },
    login:{
        paddingTop: "5%",
        width: "20%",
        float: "right"
    },
    iconButton:{
        padding: 24,
    },
    largeIcon:{
        fontSize:"large",
        color: theme.palette.accent.main
    },
    buttonContainer:{
        paddingTop: "5%",
        height: "20%",
    },
    suggestionContainer:{
        paddingTop: "5%",
        height: "30%",
    }
    }));


export default function Inici(){
    const classes = mainMenu();
    return(
        <div>
            <div>
                <div class = {classes.greeting}> 
                    <Typography align="left" variant="h3">
                        Hola Maria,<br />
                        què vols menjar avui?
                    </Typography>
                </div>
                <div class = {classes.login}> 
                    <IconButton className={classes.iconButton} aria-label="account">
                        <AccountCircleIcon fontSize="large"/>
                    </IconButton>
                </div>
            </div>
            
            <div align="center">
            <img src={sharing} class={classes.responsive}></img>
            </div>
            <div class = {classes.buttonContainer}>
                <Typography align="center" variant="h2">
                    VEURE CARTA<br /><br />
                    REPETIR COMANDA<br />
                </Typography>
            </div>
            <div class = {classes.suggestionContainer}>
                <Typography align="left" variant="h2">
                    SUGGERÈNCIES
                </Typography>
                <Typography align="left">
                    Pizza Carbonara<br />
                    Texas Burger<br />
                    Yakisoba Teriyaki
                </Typography>
            </div>

        </div>

    );
}