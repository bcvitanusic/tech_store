import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import DefaultPage from "./pages/DefaultPage";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/*navbar sidebar, cart, footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" component={SingleProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route component={DefaultPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
