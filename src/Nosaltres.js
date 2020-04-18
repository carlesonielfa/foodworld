import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    paddingLeft: "40px",
  },
  title:{
    paddingBot: "10px",
    paddingLeft: "40px",
    paddingTop: "20px",
  },
  
}));

export default function Nosaltres() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <Typography className={classes.root} align="left" variant="h2">
          Nosaltres
        </Typography>
      </div>
      <div align="center">
        <Typography className={classes.title} align="left" variant="h3">
          Qui som?
        </Typography>
        <Typography className={classes.root} align="left">
          Menjar a domicili de qualitat, de cuines de diferents països per tots els gustos.
        </Typography>
      </div>
      <div align="center">
        <Typography className={classes.title} align="left" variant="h3">
          Filosofia
        </Typography>
        <Typography className={classes.root} align="left">
          El nostre objectiu és oferir diversos tipus de menjar de la millor qualitat, sense renunciar a la comoditat de quedar-se a casa.
          <br /><br />
          Per això, volem garantir que qualsevol família o grup d'amics tinguin opcions de qualitat per tots els tipus. Si uns volen pizza i altres sushi, a FoodWorld amb una comanda n'hi ha prou!
        </Typography>
      </div>
      <div align="center">
        <Typography className={classes.title} align="left" variant="h3">
          Productes
        </Typography>
        <Typography className={classes.root} align="left">
          Sempre garantim que els nostres productes són frescos, de temporada i de primera qualitat. Els plats sempre els preparem al moment, un cop rebem les comandes.
        </Typography>
      </div>
    </div>
  );
}
