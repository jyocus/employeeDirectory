import React from 'react';
import "./style.css"

//https://getbootstrap.com/docs/4.0/layout/grid/
function Label({handleSortClick}) {
    return (
        <div className="container">
            <div className="row">
            
                <div className="col-sm">
                    <h2 onClick ={()=> handleSortClick("name")}>First Name</h2>
                </div>

                <div className="col-sm">
                    <h2>Last Name</h2>
                </div>

                <div className="col-sm">
                    <h2>Phone</h2>
                </div>

            </div>

        </div>
    )
}

export default Label
