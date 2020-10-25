import React, { Component } from 'react';

import "../css/styles.css"

const Categories = () => {
    return ( 
        <React.Fragment>
            <div className="middle_margin">
            <div className="row my-3 aw-row-override">
                    <div class="col-6 col-sm-3 col-md-2 p-1">
                        <button className="btn btn-dark btn-block">
                            Realismo
                        </button>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 p-1">
                        <button className="btn btn-dark btn-block" >
                            Impresionismo
                        </button>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 p-1">
                        <button className="btn btn-dark btn-block">
                            Abstracto
                        </button>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 p-1">
                        <button className="btn btn-dark btn-block">    
                        Surrealismo
                        </button>
                    </div>
                    <div class="col-6 col-sm-3 col-md-2 p-1">
                        <button className="btn btn-dark btn-block">
                            POP
                        </button>
                    </div>
                    
                </div>
                </div>

        </React.Fragment>
     );
}
 
export default Categories;