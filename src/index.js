import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "typeface-montserrat";
import "typeface-inter";
import "typeface-lato";
import "typeface-raleway";
import cartReducer from "./reducers/cartReducer";

const darkTheme = createMuiTheme({
  typography: {
    fontFamily: '"Raleway", "Montserrat", sans-serif',
    fontSize: 12,

    h1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 30,
    },
    h2: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 22,
    },
    h3: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 18,
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: 14,
    },
  },

  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#727171",
    },
    accent: {
      main: "#80d6d1",
    },
    error: {
      main: "#ff5656",
    },
    background: {
      main: "#f8f3f0",
      default: "#f8f3f0",
    },
    w: {
      main: "#ff5656",
    },
  },
});

const store = createStore(cartReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
