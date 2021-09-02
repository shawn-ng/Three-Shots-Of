import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import Home from "./components/common/Home";
import NavBar from "./components/common/NavBar";
import Mood from "./components/common/Mood";
import Base from "./components/common/Base";
import AToZ from "./components/common/AToZ";
import CocktailPage from "./components/cocktails/CocktailPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mood" component={Mood} />
        <Route path="/atoz" component={AToZ} />
        <Route path="/base/:drink?" component={Base} />
        <Route path="/:drink" component={CocktailPage} />
      </Switch>
    </Router>
  );
}

export default App;
