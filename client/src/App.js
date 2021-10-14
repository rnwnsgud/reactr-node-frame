import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavBar from "./components/views/NavBar/NavBar";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <div>
        <Switch>
          <Router>
            <Route path="*" component={Auth(NavBar, null)} />
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
          </Router>
        </Switch>
      </div>
    </div>
  );
}

export default App;
