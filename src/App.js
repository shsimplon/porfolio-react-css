/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";

//pages
import { Home } from "./pages";
import { Contact } from "./pages";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
