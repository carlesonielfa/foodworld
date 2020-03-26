import React from 'react';
import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Navegacio from "./Navegacio";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    flexGrow: 1,
    height:'100%'
  },
}))

//TEMA DE LA APP
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main:'#80d6d1'
    },
    secondary: {
      main:'#303030'
    },
    background: {
      paper: '#e5e5e5'
    }
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper height="100%" className={classes.paper}>
        <div className="App">
          <div className={classes.root}>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <Typography align='left' variant="h5" className={classes.title}>
                  YourMeal
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <header>
              <Typography edge="start" variant="h5">
                Benvingut a YourMeal  
              </Typography>
          </header>
          
        </div>
      </Paper>
      <Navegacio/>
    </ThemeProvider>
  );
}

export default App;
