import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact= {true} component={Category} path="/categoria/:id" />
        <Route exact={true} component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}
