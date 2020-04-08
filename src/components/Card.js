import React from 'react';


const Card = (props) => {
    return (
        <div style={{ backgroundColor: `${props.color}` }} id={props.id}>{props.text}</div>
    );
}

export default Card;