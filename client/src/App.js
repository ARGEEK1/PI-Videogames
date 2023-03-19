import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import LandingPage from "./views/LandingPage/LandingPage";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="App">
      {useLocation().pathname === "/" ? null : <NavBar />}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:gameID">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
