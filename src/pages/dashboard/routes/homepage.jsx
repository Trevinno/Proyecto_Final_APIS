import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import firebase from "firebase";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {getArt} from '../../../redux/mockdata'
import Artwork from '../../../components/img-card'
import "../../../css/styles.css";
import 'bootstrap/dist/css/bootstrap.css'

const Homepage = ({ artwork }) => {
  
  let [artworks, setArtworks] = useState([])
    useEffect(() => {
        setArtworks(getArt())
    }, [])

  return (
    <React.Fragment>
       <div className="h2 text-center mb-4">Novedades</div>
        <divBox className="little_margin">
        <Container-fluid className="item mx-4 little_margin">
        <div className="row equal-height little_margin ml-3">
        {artworks.map( art => (
        <Artwork
        key={art._id}
        artista={art.artista}
        nombre={art.nombre}
        url={art.url}
        />
        ))}
        </div>
        </Container-fluid>
        </divBox>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    artwork: state.firestore.ordered.artworks,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "artworks" }])
)(Homepage);
