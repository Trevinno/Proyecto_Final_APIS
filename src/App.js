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
import Profile from "./pages/profile";
import Buy from "./pages/buyItem";

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
          <Route path="/homepage" component={Homepage} />
          <Route path="/categorias" component={Categorias} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/profile" component={Profile} />
          <Route path="/buy_item" component={Buy} />

          <Redirect from="/" to="/homepage" />
        </Switch>
      </React.Fragment>
    );
  }
};

export default App;
