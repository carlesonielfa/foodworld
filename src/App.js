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
<<<<<<< HEAD
//TEMA DE LA APP

=======

// APP THEME
const darkTheme = createMuiTheme({
  typography: {
    fontFamily: '"Inter", "Montserrat", sans-serif',
    fontSize: 12,

    h1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: 30
    },
    h2: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: 24
    },
    h3: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: 18
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: 14
    }
  },

  palette: {
    primary: {
      main: "#333333"
    },
    secondary: {
      main: "#727171"
    },
    distinctive: {
      main: "#80d6d1"
    },
    background: {
      paper: "#f8f3f0",
      default: "#f8f3f0"
    },
    highlight: {
      main: "#ff5656"
    }
  }
});
>>>>>>> 2861927fdf29eb2522425aba49ae8296c02afb0a

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: "90vh"
<<<<<<< HEAD
  }, 
  title: {
    color: theme.palette.accent.main
=======
  },
  title: {
    color: theme.palette.primary.main,
    userSelect: "none",
>>>>>>> 2861927fdf29eb2522425aba49ae8296c02afb0a
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