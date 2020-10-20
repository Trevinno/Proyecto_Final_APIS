import React, { useState } from "react";
import * as firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../state/auth";
import { useContext } from "react";
import GoogleBtn from "../components/googleBtn"
import "../css/_button.scss"
import "../css/_login.scss"
import "../css/positions.css"
import { Container, Button } from "react-bootstrap";

const Singin = () => {
  let session = true
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  // let { currentUser } = useContext(auth).state;
  let [loading, setLoading] = useState(false);

  let [state, setState] = useState({
    email: "",
    password: "",
    error: undefined,
  });

  const onSubmit = data => {
    console.log("Submitted")
  }

  // let fireAuth = firebase.auth();
  const onUpdate = ({ name, value }) => {
    let copy = { ...state };
    copy[name] = value;
    setState(copy);
  };

  const onGoogleLogin = () => {
    // setLoading(true);
    // var provider = new firebase.auth.GoogleAuthProvider();
    // fireAuth
    //   .signInWithPopup(provider)
    //   .then((user) => {
    //     setLoading(false);
    //     return;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //     return;
    //   });
  };


  // login with email
  const onMailLogin = () => {
    // setLoading(true);
    // let { email, password } = state;
    // // let copy = { ...state };

    // //create a credential to validate account
    // let emailCred = firebase.auth.EmailAuthProvider.credential(email, password);
    // fireAuth
    //   .signInWithCredential(emailCred)

    //   .then((userCred) => {
    //     setLoading(false);
    //     if (session) history.push("/session");
    //     else history.goBack("/");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setState({ ...state, error: err });
    //   });
  };

  return (
    <React.Fragment>
      <Container>
        <h3 className="center_text">Ingresa con tu cuenta de Mahuia</h3>
        <form className="margin_between center_text" onSubmit={handleSubmit(onSubmit)}> 
          <input className="margin_between" placeholder="Correo Electronico" name="email" ref={register({ required: true })}/>
          <br/>
          <input className="margin_between" placeholder="Contraseña" name="password" name="secondInput" ref={register({ required: true })}/>
          <br/>
          <input className="margin_between" type="submit"/>
        </form>

        <GoogleBtn
        className="center_item"
        onGoogleLogin={onGoogleLogin}
        />
        <Button href="http://localhost:3000/homepage" className="margin_between center_item">Registrate</Button>



      </Container>



    </React.Fragment>
  );
};

export default Singin;