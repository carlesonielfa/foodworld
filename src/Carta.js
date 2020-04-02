import React from "react";

import { makeStyles, ButtonBase } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import pizza from "./assets/pizza.png";
import japones from "./assets/japones.jpg";

// LINK PER PODER ENTENDRE AIXÔ:
// https://material-ui.com/components/buttons/

const images = [
  {
    file: pizza,
    title: "Italià",
    subtitle: "Pizza, Pasta, Antipasti"
  },
  {
    file: japones,
    title: "Japonés",
    subtitle: "Sushi, Noodles"
  },
  {
    file: japones,
    title: "Americà",
    subtitle: "Burgers, Meats, Sides"
  },
  {
    file: japones,
    title: "Mexicà",
    subtitle: "Burritos, Tacos, Acompañamientos"
  },
  {
    file: japones,
    title: "Begudes",
    subtitle: "Burritos, Tacos, Acompañamientos"
  },
  {
    file: japones,
    title: "Postres",
    subtitle: "Burritos, Tacos, Acompañamientos"
  }
];

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
    position: "relative",
    height: 200,
    width: "90%",
    marginTop: "20px",
    marginBot: "10px",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.25
      }
    }
  },
  focusVisible: {},
  imageButton: {
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
    opacity: 0.55,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageSubtitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  }
}));

export default function Carta() {
  const classes = buttonItemMenu();

  return (
    <div className={classes.mainDiv} align="center">
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          component={Link}
          to="/fhc6/italia"
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.file})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              variant="h2"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <Typography
                variant="h3"
                color="inherit"
                className={classes.imageSubtitle}
              >
                {image.subtitle}
              </Typography>
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
