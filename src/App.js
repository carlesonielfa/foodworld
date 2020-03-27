import React from 'react';
import './App.css';
import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Navegacio from "./Navegacio";

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    minHeight: '90vh'
  }
}))

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
      <Container className={classes.content}>
        <header>
          <Typography align="center" variant="h5">
            Benvingut a YourMeal
              </Typography>
        </header>
      </Container>
      <Navegacio />
    </ThemeProvider>
  );
}

export default App;
