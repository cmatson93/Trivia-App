import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NoUrlMatch from "./pages/NoUrlMatch";
import Navbar from "./components/Navbar";
import Wrapper from "./components/PageWrapper";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    mint: "#0FC1AF",
    mintHover: "#0DA99A",
    smoke: "#C3D0D9",
    slate: "#4B5D6B",
    white: "#FFFFFF",
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
    background: ${props => props.theme.colors.smoke};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            <Route>
              <NoUrlMatch />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
