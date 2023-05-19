import React from "react";

const Card = ({ name, id, email }) => {
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/set_any/bgset_any/${ id }?200x200`}/>
            <div>
                <p className="f3 fw5">{ name }</p>
                <p className="f4">{ email }</p>
            </div>
        </div>
    )
}

export default Card;