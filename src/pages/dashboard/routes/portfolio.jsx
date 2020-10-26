import React, { Component, useEffect, useState } from 'react';
import {getJuanPerez, getArt} from '../../../redux/mockdata'
import {Card, Button, Container} from 'react-bootstrap'
import "../../../css/portfolio.scss"
import Artwork from "../../../components/img-card"
const Portfolio = () => {
    let [user, setUser] = useState({})
    let [artwork, setArtwork] = useState([])
    useEffect(() => {
        setUser(getJuanPerez())
        setArtwork(getArt())
    }, [])
    
    let backgroundPic = `url(${user.backgroundpic}) center no-repeat`
    let profilePic = `url(${user.profilepic}) center`
    
    return (  
        <React.Fragment>
                <main>
    <div style={{
        width: '100%',
        height: '400px',
        background: backgroundPic,
        backgroundSize: 'cover'
    }}></div>
    <div className="container icons">
        <div  style={{
            width: '180px',
            height: '180px',
            background: profilePic,
            backgroundSize: '140%',
            borderRadius: '50%',
            border: '2px solid white',
            marginTop: '-90px'
        }}>
        </div>
    </div>  
    <div className="details">
        <h3>{user.nombre}</h3>
    <p>{user.headline}</p>
    </div>
    <div className="container bio">
            <div className="title">
                <h6>Biografia</h6>
            </div>
            <div class="content">
                <p>{user.desc}</p>
            </div>
            <hr />
    </div>
    <div className="h3 text-center mb-4">Trabajo de Artista</div>
        <divBox className="little_margin">
        <Container-fluid className="item mx-4 little_margin">
        <div className="row equal-height little_margin ml-3">
        {artwork.filter( art => art.artista == user.nombre).map( art => (
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
</main>
        </React.Fragment>
    );
}
 
export default Portfolio