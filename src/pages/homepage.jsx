import React, {useContext, useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import firebase from 'firebase'
import "../css/styles.css"


const Homepage = () => {

    let [artworks, setArtworks] = useState([])
    firebase.initializeApp(config);
    let db = firebase.firestore()

    let artworks_list = [];

    useEffect(() => {
        loadArtworks()
    }, [])

    const loadArtworks = async () => {
        let artworks = db.collection("artworks")
        let snapshot = await artworks.get()

        snapshot.forEach((doc) => {
            let art = doc.data()
            art.ID = doc.id
            art.url = doc.img
            art.artist = doc.name
            art.category = doc.category
            art.price = doc.price
            artworks_list.push(art)
          });

          setArtworks(artworks_list)
    }

    console.log('this is a way too see how the website works')
    return (  
        <React.Fragment>
        <div className="h2 text-center mb-4">Explore</div>
        <container-fluid className="item mx-4">
        <div className="row equal-height little_margin">
        
             




        </div>
        </container-fluid>
        </React.Fragment>
    );
}
 
export default Homepage;