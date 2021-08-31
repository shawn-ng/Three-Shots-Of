import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import Home from "./components/common/Home";
import NavBar from "./components/common/NavBar";
import Mood from "./components/common/Mood";
import Base from "./components/common/Base";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mood" component={Mood}></Route>
        <Route path="/base" component={Base}></Route>
        <Route path="/atoz"></Route>
      </Switch>
    </Router>
  );
}

export default App;
