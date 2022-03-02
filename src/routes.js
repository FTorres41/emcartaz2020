import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import ArticlePage from "./pages/Article";
import AboutUsPage from "./pages/AboutUs";
import AboutColumnsPage from "./pages/AboutColumns";
import ContactPage from "./pages/Contact";
import ColumnistsPage from "./pages/Columnists";
import SearchPage from "./pages/Search";
import PromocaoPage from "./pages/Promocao";

export default function Routes() {
  return (
    <Switch>
      <Route component={PromocaoPage} path="/promocao/:promoId" />
      <Route component={SearchPage} path="/busca/:busca" />
      <Route component={ColumnistsPage} path='/colunas-em-cartaz' />
      <Route component={CategoryPage} path="/:categoria/:catId/pagina/:pagina" />
      <Route component={ArticlePage} path="/:categoria/:slug" />
      <Route component={AboutUsPage} path="/sobre-nos" />
      <Route component={AboutColumnsPage} path="/colunistas" />
      <Route component={ContactPage} path="/contato" />
      <Route component={Home} path="/" />
    </Switch>
  );
}
