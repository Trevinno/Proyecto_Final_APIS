import React, { Component } from 'react';


const Ordenes = () => {
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
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Ricardo</td>
        <td>Trevino</td>
        <td>(868) 828- 2378</td>
        <td>Av. Tamaulipas 45 C.P. 87330</td>
        </tr>
        </tbody>
        </table>
        </div>
        </React.Fragment>
     );
}
 
export default Ordenes;