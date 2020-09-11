import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";

export default function Routes() {
  return (
    <Switch>
      <Route component={CategoryPage} path="/categoria/:id/pagina/:pagina" />
      <Route component={Home} path="/" />
    </Switch>
  );
}
