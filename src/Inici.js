import React from 'react';
import sharing from "./assets/sharing.jpg";
import { makeStyles, Typography, IconButton, withStyles, ButtonBase } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const mainMenu = makeStyles(theme => ({
    responsive: {
        width: "100%",
        height: "auto",
        marginTop: "10px",
    },
    greeting:{
        paddingTop: "7%",
        width: "77%",
        float: "left",
        paddingLeft: "3%",
        color: theme.palette.primary.main
    },
    login:{
        paddingTop: "2%",
        width: "20%",
        float: "right",
        color: theme.palette.primary.main
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
        paddingLeft: "3%",
        paddingTop: "5%",
        height: "30%",
        color: theme.palette.primary.main
    }
    }));

    const buttonItemMenu = makeStyles(theme => ({
        mainDiv: {
          paddingBottom: 100
        },
        root: {
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%"
        },
        image: {
          position: "center",
          height: 40,
          width: "80%",
          marginTop: "15px",
          marginBot: "20px"
        },
        imageButton: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.main
        },
        imageSrc: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center 40%"
        },
        imageTitle: {
          position: "relative",
        }
      }));



export default function Inici(){
    const classes = mainMenu();
    const buttons = buttonItemMenu();
    
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
                        <AccountCircleIcon fontSize="large" backgroundColor="inherit"/>
                    </IconButton>
                </div>
            </div>
            
            <div align="center">
            <img src={sharing} class={classes.responsive}></img>
            </div>
            <div align="center">
                <ButtonBase
                    className={buttons.image}
                    component={Link}
                    to="/fhc6/carta"
                    >
                    <span
                        className={buttons.imageSrc}
                        style={{
                            backgroundColor: "#80d6d1"
                        }}
                    />
                    <span className={buttons.imageButton}>
                        <Typography variant="h3" color="inherit" className={buttons.imageTitle}>
                        Veure carta
                        </Typography>
                    </span>
                </ButtonBase>
            </div>
            <div align="center">
                <ButtonBase
                    className={buttons.image}
                    component={Link}
                    to="/fhc6/carta"
                    >
                    <span
                        className={buttons.imageSrc}
                        style={{
                            backgroundColor: "#80d6d1"
                        }}
                    />
                    <span className={buttons.imageButton}>
                        <Typography variant="h3" color="inherit" className={buttons.imageTitle}>
                        Repetir comanda
                        </Typography>
                    </span>
                </ButtonBase>
            </div>
            <div class = {classes.suggestionContainer}>
                <Typography align="left" variant="h2" color="inherit">
                    Suggerències
                </Typography>

            </div>

        </div>

    );
}