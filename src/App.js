import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import HomePage from "./pages/home-page/index";
import CommandsPage from "./pages/commands-page/index";
import ContactPage from "./pages/contact-page/index";
import NotFound from "./pages/notfound/index";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar/>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/commands" component={CommandsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
    </Switch>
    </div>
  )
}

export default App;
