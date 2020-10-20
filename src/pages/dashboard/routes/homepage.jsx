import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import firebase from "firebase";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "../../../css/styles.css";

const Homepage = ({ artwork }) => {
  console.log(artwork);
  return (
    <React.Fragment>
      <div className="h2 text-center mb-4">Explore</div>
      <container-fluid className="item mx-4">
        {artwork && artwork.map(({ name }) => <div>{name}</div>)}
        <div className="row equal-height little_margin"></div>
      </container-fluid>
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
