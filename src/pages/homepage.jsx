import React, {useContext, useEffect, useState} from 'react';
import {Card, Button, Container} from 'react-bootstrap'
import firebase from 'firebase'
import "../css/styles.css"
import {getArt} from '../state/mockData'
import Artwork from '../components/img-card'


const Homepage = () => {

    // firebase.initializeApp(config);
    // let db = firebase.firestore()

    // let artworks_list = [];

    let [artworks, setArtworks] = useState([])
    useEffect(() => {
        setArtworks(getArt())
    }, [])

    // const loadArtworks = async () => {
    //     let artworks = db.collection("artworks")
    //     let snapshot = await artworks.get()

    //     snapshot.forEach((doc) => {
    //         let art = doc.data()
    //         art.ID = doc.id
    //         art.url = doc.img
    //         art.artist = doc.name
    //         art.category = doc.category
    //         art.price = doc.price
    //         artworks_list.push(art)
    //       });

    //       setArtworks(artworks_list)
    // }

    console.log('this is a way too see how the website works')
    return (  
        <React.Fragment>
        <div className="h2 text-center mb-4">Novedades</div>
        <divBox className="little_margin">
        <Container-fluid className="item mx-4 little_margin">
        <div className="row equal-height little_margin ml-3">
        {artworks.map( art => (
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
}
 
export default Homepage;