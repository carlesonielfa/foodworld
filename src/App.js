import React from "react";
import "./App.css";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// SCREENS
import Carta from "./Carta";
import Inici from "./Inici";
import Cistella from "./Cistella";
import Navegacio from "./Navegacio";
import Italia from "./Italia";
import Checkout from "./Pagament";
import Nosaltres from "./Nosaltres";
import Contacte from "./Contacte";
// FONTS
import "typeface-montserrat";
import "typeface-inter";
//TEMA DE LA APP

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: "90vh",
    padding: 0,
  },
  title: {
    color: theme.palette.accent.main,
    userSelect: "none",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography align="left" variant="h1" className={classes.title}>
              FoodWorld
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      
      <BrowserRouter>
        
        <Container className={classes.content}>
          <Switch>
            <Route path="/fhc6/" exact>
              <Inici />
            </Route>
            <Route path="/fhc6/carta">
              <Carta />
            </Route>
            <Route path="/fhc6/cistella">
              <Cistella />
            </Route>
            <Route path="/fhc6/italia">
              <Italia />
            </Route>
            <Route path="/fhc6/checkout">
              <Checkout/>
            </Route>
            <Route path="/fhc6/contacte">
              <Contacte/>
            </Route>
            <Route path="/fhc6/nosaltres">
              <Nosaltres/>
            </Route>
          </Switch>
        </Container>

        <Navegacio />
      </BrowserRouter>
      </div>
  );
}

export default App;
