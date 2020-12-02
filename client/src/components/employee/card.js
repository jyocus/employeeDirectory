import React from 'react';
import "./style.css"


//https://getbootstrap.com/docs/4.0/layout/grid/
function card() {
    return (
        <div className="container">
            <div className="row">
                {/* Some kind of click event needs to happen here */}
                <div className="col-sm">
                    <h2>Column 1</h2>
                </div>

                <div className="col-sm">
                    <h2>Column 2</h2>
                </div>

                <div className="col-sm">
                    <h2>Column 3</h2>
                </div>

            </div>

        </div>
    )
}

export default card
