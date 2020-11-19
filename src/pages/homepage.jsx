import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "../css/styles.css";
import { getArt } from "../state/mockData";
import Artwork from "../components/img-card";

const Homepage = ({ artworks }) => {
  console.log(artworks);
  return (
    <React.Fragment>
      <div className="h2 text-center mb-4">Novedades</div>
      <div className="little_margin">
        <Container-fluid className="item mx-4 little_margin">
          <div className="row equal-height little_margin ml-3">
            {artworks &&
              artworks.map((art) => {
                return (
                  <Artwork
                    key={art._id}
                    artista={art.artista}
                    nombre={art.nombre}
                    url={art.url}
                    artistID={art.artistID}
                    artID={art.id}
                  />
                );
              })}
          </div>
        </Container-fluid>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.firebase.profile,
    artworks: state.firestore.ordered.artworks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "artworks",
      },
    ];
  })
)(Homepage);
