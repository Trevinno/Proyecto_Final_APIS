import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./routes/homepage";
import Categorias from "./routes/categorias";
import Portfolio from "./routes/portfolio";
import Profile from "./routes/profile";
import Navbar from "../../components/navbar"
import 'bootstrap/dist/css/bootstrap.css'

const Dash = () => (
  <React.Fragment>
  <Navbar/>
  <Switch>
    <Route path="/homepage" component={Homepage} />
    <Route path="/categorias" component={Categorias} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/profile" component={Profile} />
    <Redirect to="/homepage" />
  </Switch>
  </React.Fragment>
);

export default Dash;
