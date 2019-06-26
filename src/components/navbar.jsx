import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route
          path="/products"
          render={props => <Products sortBy="newest" {...props} />}
        />
        <Route path="/posts/:year?/:month?" component={Posts} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}

export default NavBar;
