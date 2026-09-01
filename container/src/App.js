import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingRootApp from "./components/MarketingRootApp";
import Header from "./components/Header";

export default () => {
 return (
  <BrowserRouter>
   <div>
    <Header />
    <MarketingRootApp />
   </div>
  </BrowserRouter>
 );
};
