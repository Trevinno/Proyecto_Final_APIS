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





{/* <body className="fullwidth">
        <section className="wrap">
            <section data-theme="default">
                <section className="wrap">
                <h1>Self-Responsive Order Form</h1>
                <h2>With Responsive Styles Powered by Element Queries</h2>
                <h2>Default Theme</h2>
                <form>
                <h3>Billing Information</h3>
                <fieldset id="billingAddress">
                <input type="text" name="cc_first_name" id="firstName" placeholder="First Name" autocorrect="off" />
                <input type="text" name="cc_last_name" id="lastName" placeholder="Last Name" autocorrect="off" />
                <input type="text" name="cc_street1" id="address" className="three-quarters" placeholder="Street" autocorrect="off" />
                <input type="text" name="cc_street2" id="address2" className="quarter" placeholder="Apt/Suite" autocorrect="off" /> 
                <input type="text" name="cc_city" id="city" placeholder="City" autocorrect="off" />
                <input type="text" name="cc_state" id="region" placeholder="State/Provinc" autocorrect="off" />
                <input type="text" name="cc_postal_code" id="postal" placeholder="Zip Code" autocorrect="off" />
                <select name="cc_country" id="country" x-autocompletetype="country">
                </select>
                </fieldset>
                    <button>Complete My Order!</button>
                </form>
                </section>
            </section>
        </section>
        </body> */}