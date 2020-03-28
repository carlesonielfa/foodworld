import React from 'react';
import './App.css';
import logo from './logo.svg';
import {AppBar,Toolbar,Container,Typography} from '@material-ui/core';
import { makeStyles, createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Carta from "./Carta"
import Inici from "./Inici"
import Cistella from "./Cistella"
import Navegacio from "./Navegacio"

//TEMA DE LA APP
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#80d6d1'
    },
    secondary: {
      main: '#303030'
    },
    background: {
      paper: '#e5e5e5',
      default: '#e5e5e5'
    }
  },
});

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: '90vh'
  }
}))

//Estils navegacio
const buttonCartaStyles = makeStyles(theme => ({
  //style pel boto carta
  root: {
    color: theme.palette.secondary.main,
    "&$selected": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.primary.main,
    borderRadius:"50%",
    top: "-35px",
    maxWidth: "0",
    height: "130%"

  },
  selected:{}
}))
const buttonStyles = makeStyles(theme => ({
  //style pels altres botons
  root: {
    color: theme.palette.secondary.light,
    "&$selected": {
      color: "white",
    },
  },
  selected:{}
}))
const bottomNavStyles = makeStyles(theme => ({
  //style per la navigation
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.secondary.main
  },

}))



function App() {
  const classes = useStyles();
  
  return (

      <ThemeProvider theme={darkTheme}>
        <div>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography align='left' variant="h5" className={classes.title}>
                YourMeal
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <BrowserRouter>
          <Container className={classes.content}>
            <Switch>
              <Route path="/fhc6/" exact><Inici/></Route>
              <Route path="/fhc6/carta"><Carta/></Route>
              <Route path="/fhc6/cistella"><Cistella/></Route>
            </Switch>
          </Container>



          <Navegacio/>
        </BrowserRouter>
      </ThemeProvider>

  );
}

export default App;
