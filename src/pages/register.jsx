import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import { Container, Button } from "react-bootstrap";
import "../css/positions.css"


const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('This is before your time')
  }
  return (  
    <React.Fragment>
    <Container >
      <h3 className="center_text">Ingresa la Informacion de tu cuenta</h3>
    <form className="margin_between center_text" onSubmit={onSubmit}>
      <input className="margin_between" placeholder="Nombre Completo" name="name" ref={register({ required: true })} />
      <br/>
      <input className="margin_between" placeholder="Correo Electronico" name="email" ref={register({ required: true })} />
      <br/>
      <input className="margin_between" placeholder="Contraseña" name="clave" ref={register({ required: true })}/>
      <br/>
      <input className="margin_between" placeholder="Estado" name="estado" ref={register({ required: true })} />
      <br/>
      <input className="margin_between" placeholder="Ciudad" name="ciudad" ref={register({ required: true })} />
      <br/>
      <input type="submit"></input>
    </form>
    </Container>
    </React.Fragment>
  );
}
 
export default Register;
