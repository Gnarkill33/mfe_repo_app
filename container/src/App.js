import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingRootApp"));

export default () => {
 const [isSignedIn, setIsSignedIn] = useState(false);

 return (
  <BrowserRouter>
   <div>
    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
    <Suspense fallback={<Progress />}>
     <Switch>
      <Route path='/auth'>
       <AuthLazy onSignIn={() => setIsSignedIn(true)} />
      </Route>
      <Route path='/' component={MarketingLazy} />
     </Switch>
    </Suspense>
   </div>
  </BrowserRouter>
 );
};
