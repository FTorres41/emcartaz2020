import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import ArticlePage from "./pages/Article";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";

export default function Routes() {
  return (
    <Switch>
      <Route component={CategoryPage} path="/categoria/:catId/pagina/:pagina" />
      <Route component={CategoryPage} path="/:categoria/:catId/pagina/:pagina" />
      <Route component={ArticlePage} path="/categoria/:catId/materia/:id" />
      <Route component={ArticlePage} path="/:categoria/:slug" />
      <Route component={AboutUsPage} path="/sobre-nos" />
      <Route component={ContactPage} path="/contato" />
      <Route component={Home} path="/" />
    </Switch>
  );
}
