import React from "react";
import sharing from "./assets/sharing.jpg";
import {
  makeStyles,
  Typography,
  IconButton,
  ButtonBase,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import carbonara from "./assets/carbonara.png";
import FoodButton from "./FoodButton";

const mainMenu = makeStyles((theme) => ({
  mainDiv: {
    paddingBottom: "60px",
  },
  responsive: {
    width: "100%",
    height: "auto",
  },
  greeting: {
    paddingTop: "7%",
    width: "67%",
    float: "left",
    paddingLeft: "25px",
    color: theme.palette.primary.main,
  },
  login: {
    paddingTop: "2%",
    width: "20%",
    float: "right",
    color: theme.palette.primary.main,
  },
  iconButton: {
    padding: 24,
  },
  largeIcon: {
    fontSize: "large",
    color: theme.palette.accent.main,
  },
  buttonContainer: {
    paddingTop: "5%",
    height: "20%",
  },
  suggestionContainer: {
    paddingLeft: "25px",
    paddingTop: "30px",
    height: "25%",
    color: theme.palette.primary.main,
  },
}));

const suggestionBox = makeStyles((theme) => ({
  itemBox: {
    paddingTop: "15px",
    paddingRight: "20px",
    height: "100px",
  },
  imageContainer: {
    alignItems: "center",
    verticalAlign: "middle",
    float: "left",
    width: "30%",
  },
  image: {
    width: "110px",
  },
  infoContainer: {
    paddingTop: "20px",
    width: "65%",
    float: "right",
    verticalAlign: "middle",
    //backgroundColor: "grey"
  },
  description: {
    textAlign: "justify",
  },
}));

const menuButton = makeStyles((theme) => ({
  root: {
    position: "center",
    height: 28,
    width: "90%",
    marginTop: "10px",
    marginBot: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "7px",
    backgroundColor: "#828181",
    color: theme.palette.background.main,
  },
  container: {
    paddingBottom: "50px",
    paddingTop: "20px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  leftContainer: {
    float: "left",
    width: "50%",
    color: theme.palette.background.main,
  },
  rightContainer: {
    float: "right",
    width: "50%",
    color: theme.palette.background.main,
  },
}));

export default function Inici() {
  const classes = mainMenu();
  const suggestions = suggestionBox();
  const menuButtons = menuButton();

  return (
    <div class={classes.mainDiv}>
      <div>
        <div class={classes.greeting}>
          <Typography align="left" variant="h3">
            Hola Maria,
            <br />
            què vols menjar avui?
          </Typography>
        </div>
        <div class={classes.login}>
          <IconButton className={classes.iconButton} aria-label="account">
            <AccountCircleIcon fontSize="large" backgroundColor="inherit" />
          </IconButton>
        </div>
      </div>

      <div align="center">
        <img src={sharing} class={classes.responsive} alt=""></img>
      </div>

      <FoodButton component={Link} to="/fhc6/carta" text="Veure Carta" />
      <FoodButton component={Link} to="/fhc6/carta" text="Repetir Comanda" />
      <div class={classes.suggestionContainer}>
        <Typography align="left" variant="h3" color="inherit">
          Suggermient de la setmana
        </Typography>
        <div className={suggestions.itemBox}>
          <div className={suggestions.imageContainer}>
            <img
              className={suggestions.image}
              src={carbonara}
              alt="Carbonara"
            ></img>
          </div>
          <div className={suggestions.infoContainer}>
            <Typography variant="h3" align="left">
              Carbonara
            </Typography>
            <Typography className={suggestions.description}>
              La més demanada pels clients
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className={menuButtons.container}>
          <div align="right" className={menuButtons.rightContainer}>
            <ButtonBase
              component={Link}
              to="/fhc6/nosaltres"
              className={menuButtons.root}
            >
              <Typography variant="subtitle1" color="inherit">
                Nosaltres
              </Typography>
            </ButtonBase>
          </div>
          <div align="left" className={menuButtons.rightContainer}>
            <ButtonBase
              component={Link}
              to="/fhc6/contacte"
              className={menuButtons.root}
            >
              <Typography variant="subtitle1" color="background">
                Contacte
              </Typography>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
}
