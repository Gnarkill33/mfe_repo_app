import React, { Suspense, lazy, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingRootApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const history = createBrowserHistory();

export default () => {
 const [isSignedIn, setIsSignedIn] = useState(false);

 useEffect(() => {
  if (isSignedIn) {
   history.push("/dashboard");
  }
 }, [isSignedIn]);

 return (
  <Router history={history}>
   <div>
    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
    <Suspense fallback={<Progress />}>
     <Switch>
      <Route path='/auth'>
       <AuthLazy onSignIn={() => setIsSignedIn(true)} />
      </Route>
      <Route path='/dashboard'>
       {!isSignedIn && <Redirect to='/' />}
       <DashboardLazy />
      </Route>
      <Route path='/' component={MarketingLazy} />
     </Switch>
    </Suspense>
   </div>
  </Router>
 );
};
