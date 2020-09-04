import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NoUrlMatch from "./pages/NoUrlMatch";
import Navbar from "./components/Navbar";
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
      </Router>
    </ThemeProvider>

    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
