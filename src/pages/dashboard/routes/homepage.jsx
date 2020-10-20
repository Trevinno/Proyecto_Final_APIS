import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import firebase from "firebase";
import "../../../css/styles.css";

const Homepage = () => {
  let [artworks, setArtworks] = useState([]);

  let artworks_list = [];

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = async () => {};

  console.log("this is a way too see how the website works");
  return (
    <React.Fragment>
      <div className="h2 text-center mb-4">Explore</div>
      <container-fluid className="item mx-4">
        <div className="row equal-height little_margin"></div>
      </container-fluid>
    </React.Fragment>
  );
};

export default Homepage;
