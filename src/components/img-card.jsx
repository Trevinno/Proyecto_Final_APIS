import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import "../css/styles.css"

const Artwork = ({artista, nombre, url}) => {
    
    return ( 
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4"   >
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" className="img_size" src={url} />
                <Card.Body className="">
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                {artista}
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
     );
}
 
export default Artwork;