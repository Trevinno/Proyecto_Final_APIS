import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import "../css/styles.css"

const Artwork = () => {
    return ( 
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4"   >
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" className="img_size" src="https://i.pinimg.com/originals/28/f8/b9/28f8b966ab3670c8782ba68620887074.jpg" />
                <Card.Body className="">
                <Card.Title>Autor</Card.Title>
                <Card.Text>
                Jimena Sanchez
                </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
     );
}
 
export default Artwork;