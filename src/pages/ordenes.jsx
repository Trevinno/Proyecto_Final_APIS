import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Ordenes = ({ Orders }) => {
  if (Orders === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="bs-example container" data-example-id="striped-table">
        <table className="table table-striped table-bordered table-hover">
          <caption>Ordenes de Venta</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Arte ID</th>
            </tr>
          </thead>
          <tbody>
            {Orders &&
              Orders.map((order, key) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{order.firstName}</td>
                  <td>{order.lastName}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.artID}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.firebase.profile,
    Orders: state.firestore.ordered.Orders,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.profile.userID === undefined) return [];

    return [
      {
        collection: "Orders",
      },
    ];
  })
)(Ordenes);
