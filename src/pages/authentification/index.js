import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signin from "./routes/signIn";
import Register from "./routes/register";

const Auth = () => (
  <Switch>
    <Route path="/sign_in" component={Signin} />
    <Route path="/register" component={Register} />
    <Redirect to="/sign_in" />
  </Switch>
);

export default Auth;
