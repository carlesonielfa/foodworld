import React from "react";

import {
  makeStyles,
  ButtonBase,
  Container,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Italia from "./Italia";

import pizza from "./assets/pizza.png";

import japones from "./assets/japones.jpg"
// LINK PER PODER ENTENDRE AIXÔ:
// https://material-ui.com/components/buttons/

const images = [
  {
    file: pizza,
    title: "Italià"
  },
  {
    file: japones,
    title: "Japonés"
  }
];

const buttonItemMenu = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    width: '90%',
    marginTop: '40px',
    marginBot: '20px',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Carta() {
  const classes = buttonItemMenu();

  return (
    
    <div align="center">
      {images.map(image =>(
        <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
      >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.file})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              variant="h2"
              color="inherit"
              className={classes.imageTitle}>

              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>  
      

  );
}
