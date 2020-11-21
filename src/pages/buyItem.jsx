import React, { useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { useHistory } from "react-router-dom";
import "../css/billing.css";

const BuyItem = ({ artID, artworks }) => {
  const [form, setForm] = useState({});
  console.log(form);
  let history = useHistory();

  const handleChange = ({ target }) =>
    setForm({ ...form, [target.name]: target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(artworks);
    const db = firebase.firestore();
    db.collection("Orders")
      .add({
        firstName: form.firstname,
        lastName: form.lastname,
        phone: form.phone,
        address: form.address,
        artID,
        artistID: artworks[artID].artistID,
      })
      .then(function (docRef) {
        history.push("/");
      });
  };

  return (
    <React.Fragment>
      <body className="body">
        <form id="myform" onSubmit={submit}>
          <header>Orden de Compra</header>
          <div className="area">
            <div className="row">
              <div className="col2">
                <input type="text" name="firstname" onChange={handleChange} />
                <label for="fistname">Primer Nombre</label>
              </div>
              <div className="col2">
                <input type="text" name="lastname" onChange={handleChange} />
                <label for="lastname">Apellido</label>
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
              />
              <label for="phone">Telefono</label>
            </div>
            <div className="row">
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
              />
              <label for="address">Direccion (Opcional)</label>
            </div>
          </div>
          <div className="area">
            <div className="ckeckarea">
              <input
                type="checkbox"
                name="checkbox1"
                id="checkbox1"
                onclick="autofilling(this.form)"
                onChange={handleChange}
              />
              <label for="checkbox1">
                Estoy de acuerdo con la polica de la empresa.
              </label>
            </div>
          </div>
          <div className="black_border flex_row row">
            <input type="submit" value="Enviar" className="btn" />
            <input type="submit" value="Cancelar" className="float_right btn" />
          </div>
        </form>
      </body>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    profile: state.firebase.profile,
    artworks: state.firestore.data.artworks,
    artID: id,
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
)(BuyItem);
