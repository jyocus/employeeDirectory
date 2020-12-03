import React from 'react';
import "./style.css";



//https://getbootstrap.com/docs/4.0/layout/grid/
function Card({user}) {
    return (
        
            <div className="row">

                {/* Some kind of click event needs to happen here */}
                <div className="col-sm">
                    <h2>{user.name.first}</h2>
                </div>

                <div className="col-sm">
                    <h2>{user.name.last}</h2>
                </div>

                <div className="col-sm">
                    <h2>{user.phone}</h2>
                </div>

            </div>

    )
}

export default Card
