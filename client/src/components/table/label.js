import React from 'react';
import "./style.css"

//https://getbootstrap.com/docs/4.0/layout/grid/
function label() {
    return (
        <div className="container">
            <div className="row">
            
                <div className="col-sm">
                    <h2>Label 1</h2>
                </div>

                <div className="col-sm">
                    <h2>Label 2</h2>
                </div>

                <div className="col-sm">
                    <h2>Label 3</h2>
                </div>

            </div>

        </div>
    )
}

export default label
