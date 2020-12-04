import React from 'react';
import "./style.css"



function SearchBar({handleSearchChange}) {
    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-lg-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>

        </div>
    )
}

export default SearchBar
