import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import Home from "./components/common/Home";
import NavBar from "./components/common/NavBar";
import Mood from "./components/common/Mood";
import Base from "./components/common/Base";
import AToZ from "./components/common/AToZ";
import CocktailPage from "./components/cocktails/CocktailPage";
import Happy from "./components/moods/Happy";
import Sad from "./components/moods/Sad";
import Neutral from "./components/moods/Neutral";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mood/happy" component={Happy} />
        <Route path="/mood/sad" component={Sad} />
        <Route path="/mood/neutral" component={Neutral} />
        <Route path="/mood" component={Mood} />
        <Route path="/base/:drink?" component={Base} />
        <Route path="/:drink" component={CocktailPage} />
        <Route path="/atoz" component={AToZ} />
      </Switch>
    </Router>
  );
}

export default App;
