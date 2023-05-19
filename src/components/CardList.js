import React from "react";
import Card from "../components/Card";

const CardList = ({ robots }) => {
    // console.log(robots);
    return(
        <div>
            {robots.map((user, index) => (
                <Card key={ index } name={ user.name } id={ user.id } email={ user.email } />
            ))}
        </div>
    )
}

export default CardList;