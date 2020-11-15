import React, { Component } from 'react';
import "../css/positions.css"

const Profile = () => {
    return (  
        <React.Fragment>
            <h3 className="center_item margin_bot">Perfil</h3>
            <div className="flex_position">
                <div className="flex_child" >
                <form>
				<div className="form-group">
				    <label className="col-sm-2 control-label">Nombre</label>
              	    <div className="">
                        <input className="form-control" type="text" name="firstName" placeholder="First Name" ng-model="me.firstName"/>
              	    </div>
            	</div>
				<div className="form-group">
                    <label className="col-sm-2 control-label">Apellido</label>
                    <div className="">
                        <input className="form-control" type="text" name="lastName"
                    placeholder="Last Name" ng-model="me.lastName"/>
                    </div>
            	</div>
				<div className="form-group">
                    <label className="col-sm-2 control-label">Fecha de Nacimiento</label>
                    <div className="">
                        <input className="form-control" type="date" name="email" placeholder="Email" ng-model="me.email"/>
                    </div>
            	</div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Sexo</label>
                    <div className="">
                        <input className="form-control" type="text" name="email" placeholder="Seco" ng-model="me.email"/>
                    </div>
            	</div>  
                <div className="form-group">
                    <label className="col-sm-2 control-label">Estado</label>
                    <div className="">
                        <input className="form-control" type="text" name="email" placeholder="Estado" ng-model="me.email"/>
                    </div>
            	</div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Ciudad</label>
                    <div className="">
                        <input className="form-control" type="text" name="email" placeholder="Ciudad" ng-model="me.email"/>
                    </div>
            	</div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Posicion</label>
                    <div className="">
                        <input className="form-control" type="text" name="email" placeholder="Posicion" ng-model="me.email"/>
                    </div>
            	</div>       
				<div className="form-group">
                    <div className="">
                    <button className=" btn-primary" ng-click="updateMe()">Actulalizar</button>
                    </div>
            	</div>
				</form>
                </div>
                
            </div>
        </React.Fragment>
    );
}
 
export default Profile;