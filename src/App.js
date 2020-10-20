import React from "react";
import "./App.css";
import { connect, useSelector } from "react-redux";
import Authentification from "./pages/authentification";
import Dashboard from "./pages/dashboard";

function AuthIsLoaded() {
  const auth = useSelector((state) => state.firebase.auth);
  if (auth.isEmpty) return true;
  return false;
}

const App = () => {
  if (AuthIsLoaded()) {
    return <Authentification />;
  } else {
    return <Dashboard />;
  }
};

export default App;
