import React, { useState } from "react";
import * as firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import GoogleBtn from "../../../components/googleBtn";
import "../../../css/_button.scss";
import "../../../css/_login.scss";
import "../../../css/positions.css";
import { Container, Button } from "react-bootstrap";

const Singin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let [state, setState] = useState({
    email: "",
    password: "",
    error: undefined,
  });

  // login with email
  const onMailLogin = (e) => {
    e.preventDefault();
    console.log(state);
    firebase.auth().signInWithEmailAndPassword(state.email, state.password);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Container>
        <h3 className="center_text">Ingresa con tu cuenta de Mahuia</h3>
        <form className="margin_between center_text" onSubmit={onMailLogin}>
          <input
            className="margin_between"
            placeholder="Correo Electronico"
            name="email"
            onChange={handleChange}
            ref={register({ required: true })}
          />
          <br />
          <input
            className="margin_between"
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
            name="password"
            ref={register({ required: true })}
          />
          <br />
          <input className="margin_between" type="submit" />
        </form>

        <GoogleBtn className="center_item" />
        <Button
          href="http://localhost:3000/homepage"
          className="margin_between center_item"
        >
          Registrate
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Singin;
