import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import ArticlePage from "./pages/Article";

export default function Routes() {
  return (
    <Switch>
      <Route component={CategoryPage} path="/categoria/:id/pagina/:pagina" />
      <Route component={ArticlePage} path="/materia/:id" />
      <Route component={Home} path="/" />
    </Switch>
  );
}
