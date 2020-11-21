import React, { useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Artwork from "../components/img-card";

import "../css/styles.css";

const Categories = ({ artworks }) => {
  console.log(artworks);
  let [category, setCategory] = useState("");
  console.log(category);
  return (
    <React.Fragment>
      <div className="middle_margin">
        <div className="row my-3 aw-row-override">
          <div class="col-6 col-sm-3 col-md-2 p-1">
            <button
              className="btn btn-dark btn-block"
              onClick={() => setCategory("Realismo")}
            >
              Realismo
            </button>
          </div>
          <div class="col-6 col-sm-3 col-md-2 p-1">
            <button
              className="btn btn-dark btn-block"
              onClick={() => setCategory("Impresionismo")}
            >
              Impresionismo
            </button>
          </div>
          <div class="col-6 col-sm-3 col-md-2 p-1">
            <button
              className="btn btn-dark btn-block"
              onClick={() => setCategory("Abstracto")}
            >
              Abstracto
            </button>
          </div>
          <div class="col-6 col-sm-3 col-md-2 p-1">
            <button
              className="btn btn-dark btn-block"
              onClick={() => setCategory("Surrealismo")}
            >
              Surrealismo
            </button>
          </div>
          <div class="col-6 col-sm-3 col-md-2 p-1">
            <button
              className="btn btn-dark btn-block"
              onClick={() => setCategory("POP")}
            >
              POP
            </button>
          </div>
        </div>
      </div>
      <Container-fluid className="item mx-4 little_margin">
        <div className="row equal-height little_margin ml-3">
          {artworks &&
            artworks.map((art) => {
              if (category === "" || category === art.categoria) {
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
              }
              return null;
            })}
        </div>
      </Container-fluid>
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
)(Categories);
