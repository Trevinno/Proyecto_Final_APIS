import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import { useSelector } from "react-redux";
import Categorias from "./pages/categorias";
import Navbar from "./components/navbar";
import Signin from "./pages/signIn";
import Register from "./pages/register";
import Portfolio from "./pages/portfolio";
import Ordenes from "./pages/ordenes";
import Profile from "./pages/profile";
import Buy from "./pages/buyItem";
import AgregarArte from "./pages/agregarArte";

function AuthIsLoaded() {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);
  if (auth.isEmpty) return true;
  return false;
}

const App = () => {
  if (AuthIsLoaded()) {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/sign_in" component={Signin} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/sign_in" />
        </Switch>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/ordenes" component={Ordenes} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/categorias" component={Categorias} />
          <Route path="/portfolio/:id" component={Portfolio} />
          <Route path="/profile/" component={Profile} />
          <Route path="/buy_item/:id" component={Buy} />
          <Route path="/agregarArte" component={AgregarArte} />

          <Redirect from="/" to="/homepage" />
        </Switch>
      </React.Fragment>
    );
  }
};

export default App;
