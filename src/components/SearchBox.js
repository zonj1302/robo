import React from "react";

const SearchBox = ({searchChange}) => {

    return(
        <div className="ma3">
            <input className="pa3 ba b--green bg-light-blue" type="search" placeholder="type here" onChange={searchChange} />
        </div>
    )
}

export default SearchBox;