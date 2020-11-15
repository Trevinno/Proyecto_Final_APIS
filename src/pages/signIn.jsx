import React, { useState } from "react";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../state/auth";
import { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import GoogleBtn from "../components/googleBtn";
import "../css/_button.scss";
import "../css/_login.scss";
import "../css/positions.css";

const Singin = () => {
  let session = true;
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  // let { currentUser } = useContext(auth).state;
  let [loading, setLoading] = useState(false);

  let [state, setState] = useState({
    email: "",
    password: "",
    error: undefined,
  });

  const onSubmit = (data) => {
    console.log(data);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("yep");
      })
      .catch((err) => {
        console.lof(err);
      });
  };

  // let fireAuth = firebase.auth();
  const onUpdate = ({ name, value }) => {
    let copy = { ...state };
    copy[name] = value;
    setState(copy);
  };

  const onGoogleLogin = () => {};

  const onMailLogin = () => {};

  return (
    <React.Fragment>
      <Container>
        <h3 className="center_text">Ingresa con tu cuenta de Mahuia</h3>
        <form
          className="margin_between center_text"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="margin_between"
            placeholder="Correo Electronico"
            name="email"
            ref={register({ required: true })}
          />
          <br />
          <input
            className="margin_between"
            placeholder="Contraseña"
            name="password"
            ref={register({ required: true })}
          />
          <br />
          <input className="margin_between" type="submit" />
        </form>
        <GoogleBtn
          className="center_item margin_left margin_between"
          onGoogleLogin={onGoogleLogin}
        />
        <Button
          href="http://localhost:3000/register"
          className="center_item margin_left margin_between center_item"
        >
          Registrate
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Singin;