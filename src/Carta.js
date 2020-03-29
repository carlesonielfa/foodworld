import React from "react";

import {
  makeStyles,
  ButtonBase,
  Container,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import { CardMedia } from "material-ui";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Italia from "./Italia";

import pizza from "./assets/pizza.png";

// LINK PER PODER ENTENDRE AIXÔ:
// https://material-ui.com/components/buttons/

const images = [
  {
    url: "./assets/pizza.png",
    title: "Italià"
  },
  {
    url: "./assets/pizza.png",
    title: "Japonés"
  }
];

const buttonItemMenu = makeStyles(theme => ({
  root: {},
  image: {
    height: 200
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
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
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  },
  media: {
    height: 140
  }
}));

export default function Carta() {
  const classes = buttonItemMenu();

  // TODO: El final queda tallat
  // TODO: No puc afegir la imatge
  // <CardMedia className={classes.media} image="./assets/pizza.png" />
  return (
    <div align="center">
      <CardActionArea>
        <CardContent>
          <Typography>Pizzanini</Typography>
        </CardContent>
      </CardActionArea>

      <div className={classes.root}>
        {images.map(image => (
          <div>
            <ButtonBase
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </div>
        ))}
      </div>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/fhc6/italia"
      >
        Italià
      </Button>
    </div>
  );
}
