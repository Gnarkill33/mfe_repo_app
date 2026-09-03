import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingRootApp from "./components/MarketingRootApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";

export default () => {
 return (
  <BrowserRouter>
   <div>
    <Header />
    <Switch>
     <Route path='/auth' component={AuthApp} />
     <Route path='/' component={MarketingRootApp} />
    </Switch>
   </div>
  </BrowserRouter>
 );
};
