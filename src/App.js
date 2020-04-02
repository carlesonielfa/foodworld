import React from "react";
import "./App.css";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// SCREENS
import Carta from "./Carta";
import Inici from "./Inici";
import Cistella from "./Cistella";
import Navegacio from "./Navegacio";
import Italia from "./Italia";

// FONTS
import "typeface-montserrat";
import "typeface-inter";
//TEMA DE LA APP

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: "90vh"
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
              YourMeal
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
          </Switch>
        </Container>

        <Navegacio />
      </BrowserRouter>
      </div>
  );
}

export default App;
