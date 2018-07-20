import React, { Component } from "react";
import { render } from "react-dom";
import routes from "./routes";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default App;
