import React, { Component, useEffect, useState } from "react";
import { getJuanPerez, getArt } from "../state/mockData";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Card, Button, Container } from "react-bootstrap";
import "../css/portfolio.scss";
import Artwork from "../components/img-card";

const Portfolio = ({ profile, artworks, Usuario }) => {
  // https://pm1.narvii.com/6484/c0636108d387d4859371b96b0892a42425a2ed0f_00.jpg
  // http://simplyleonardodicaprio.com/wp-content/uploads/leo-1.jpg
  if (Usuario === undefined || Usuario === null) {
    return null;
  }
  let backgroundPic = `url(${Usuario.backgroundpic}) center no-repeat`;
  let profilePic = `url(${Usuario.profilepic}) center`;
  return (
    <React.Fragment>
      <main>
        <div
          style={{
            width: "100%",
            height: "400px",
            background: backgroundPic,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container icons">
          <div
            style={{
              width: "180px",
              height: "180px",
              background: profilePic,
              backgroundSize: "140%",
              borderRadius: "50%",
              border: "2px solid white",
              marginTop: "-90px",
            }}
          ></div>
        </div>
        <div className="details">
          <h3>
            {Usuario.firstName} {Usuario.lastName}
          </h3>
          <p>{Usuario.headline}</p>
        </div>
        <div className="container bio">
          <div className="title">
            <h6>Biografia</h6>
          </div>
          <div class="content">
            <p>{Usuario.description}</p>
          </div>
          <hr />
        </div>
        <div className="flex_parent">
          <div className="flex_child">
            <Button
              style={{
                fontSize: "70%",
              }}
              variant="info ml-1"
            >
              Cambiar Foto de Perfil
            </Button>
          </div>
          <div className="flex_child">
            <Button
              style={{
                fontSize: "70%",
              }}
              className="button_size"
              variant="info ml-1"
            >
              Cambiar Foto de Fondo
            </Button>
          </div>
          <div className="flex_child">
            <Button
              style={{
                fontSize: "70%",
              }}
              className="button_size"
              variant="info ml-1"
              href="http://localhost:3000/agregarArte"
            >
              Agregar Arte
            </Button>
          </div>
          <div className="flex_child">
            <Button
              style={{
                fontSize: "70%",
              }}
              className="button_size"
              variant="info ml-1"
            >
              Ver Ofertas
            </Button>
          </div>
        </div>
        <div className="h3 text-center mb-4">Trabajo de Artista</div>
        <divBox className="little_margin">
          <Container-fluid className="item mx-4 little_margin">
            <div className="row equal-height little_margin ml-3">
              {artworks &&
                artworks.map((art) => {
                  if (art.artistID !== Usuario.userID) {
                    return null;
                  }
                  return (
                    <Artwork
                      key={art._id}
                      artista={art.artista}
                      nombre={art.nombre}
                      url={art.url}
                    />
                  );
                })}
            </div>
          </Container-fluid>
        </divBox>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  const Usuarios = state.firestore.data.Usuarios;
  const Usuario = Usuarios ? Usuarios[id] : null;
  console.log(Usuario);
  return {
    profile: state.firebase.profile,
    artworks: state.firestore.ordered.artworks,
    Usuario: Usuario,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.profile.userID === undefined) return [];

    return [
      {
        collection: "artworks",
      },
      {
        collection: "Usuarios",
      },
    ];
  })
)(Portfolio);
