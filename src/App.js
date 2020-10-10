import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Landing from "./pages/Landing";
import NoUrlMatch from "./pages/NoUrlMatch";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    blue: "#5EB1BF",
    lightCyan: "#CDEDF6",
    orange: "#EF7B45",
    red: "#d84727",
    black: "#042a2b",
    white: "#eff1f3",
  },
  fontSizes: {
    button: "16px",
    header: "20px",
    small: "12px",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    background: theme.colors.white;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/landing'>
            <Landing />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <NoUrlMatch />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
