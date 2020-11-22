import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../css/styles.css";

const Artwork = ({ artista, nombre, url, artistID, artID }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" className="img_size" src={url} />
        <Card.Body className="">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{artista}</Card.Text>
          <Button variant="info ml-1">
            <Link style={{ color: 'inherit', textDecoration: 'inherit', width: '100%', height: '100%' }} to={"/portfolio/" + artistID} >
            Visitar Artista
              </Link>
          </Button>
          <Button variant="danger ml-2" href={"/buy_item/" + artID}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit', width: '100%', height: '100%' }} to={"/buy_item/" + artID} >
            Comprar
              </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Artwork;
