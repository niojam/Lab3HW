import React, { useState } from "react";
import styled from "@emotion/styled";
import Login from "./features/login";
import Home from "./features/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #342b60;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #040729;
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Container>
        <Header>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/"
              render={() => {
                return isAuthenticated ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
          </Switch>
        </Header>
      </Container>
    </Router>
  );
};

export default App;
