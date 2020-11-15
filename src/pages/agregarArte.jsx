import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import "../css/billing.css"

const AgregarArte = () => {
    return (  
        <React.Fragment>
        <body className="body">
        <form id="myform">
        <header>Nueva Arte</header>
        <div className="area">
        <div className="row">
        <input type="text" name="nombre" id="phone" />
        <label for="nombre">Nombre</label>
        </div>
        <div className="row">
        <div className="col2">
        <input type="number" name="precio" />
        <label for="precio">Precio</label>
        </div>
        <div className="col2 selectdiv">
        <select id="categorias" name="categorias">
        <option disabled selected value> Seleciona Una Categoria </option>
        <option value="Realismo">Realismo</option>
        <option value="Impresionismo">Impresionimso</option>
        <option value="abstracto">Abstracto</option>
        <option value="surrealismo">Surrealismo</option>
        <option value="pop">POP</option>
        </select>
        <label for="categoria">Categoria</label>
        </div>
        </div>
        <div className="row">
        <Button
        style={{
            backgroundColor: '#69B692',
            color: 'black',
            padding: '1rem 1.5rem',
            borderColor: '#69B692'
        }}
        >Selecciona Arte</Button>
        
        </div>
        </div>
        <div className="area">
        <div className="ckeckarea">
        <input type="checkbox" name="checkbox1" id="checkbox1" onclick="autofilling(this.form)" />
        <label for="checkbox1">Estoy de acuerdo con la polica de la empresa.</label>
        </div>
        </div>
        <div className="black_border flex_row row">
        <input type="submit" value="Agregar" className="btnEnviar" />
        </div>
        </form>
        </body>
        </React.Fragment>
    );
}
 
export default AgregarArte;