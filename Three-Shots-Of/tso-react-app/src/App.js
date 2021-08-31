import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import Home from "./components/common/Home";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mood"></Route>
        <Route path="/base"></Route>
        <Route path="/a-z"></Route>
      </Switch>
    </Router>
  );
}

export default App;
