import React, { Component } from 'react';
import "../css/billing.css"

const BuyItem = () => {
    return (  
        <React.Fragment>
        <body className="body">
        <form id="myform">
        <header>Orden de Compra</header>
        <div className="area">
        <div className="row">
        <div className="col2">
        <input type="text" name="firstname" />
        <label for="fistname">Primer Nombre</label>
        </div>
        <div className="col2">
        <input type="text" name="lastname" />
        <label for="lastname">Apellido</label>
        </div>
        </div>
        <div className="row">
        <input type="text" name="phone" id="phone" />
        <label for="phone">Telefono</label>
        </div>
        <div className="row">
        <input type="text" name="address" id="address" />
        <label for="address">Direccion (Opcional)</label>
        </div>
        </div>
        <div className="area">
        <div className="ckeckarea">
        <input type="checkbox" name="checkbox1" id="checkbox1" onclick="autofilling(this.form)" />
        <label for="checkbox1">Check this box if order info and sending info are the same.</label>
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
}
 
export default BuyItem;