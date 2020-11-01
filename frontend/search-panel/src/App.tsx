import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Search from "./components/search/Search";
import ProductDetail from "./components/products/ProductDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/product/:id" exact component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
